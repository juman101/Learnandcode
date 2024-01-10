import express from 'express';
import csurf from 'csurf';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { join, dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const csrfProtection = csurf({ cookie: true });

const mongoAtlasUri = 'mongodb+srv://jd:jd@cluster0.2yuw6he.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoAtlasUri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Apply middleware
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cookieParser());

// Routes
const routesPath = './routes';

readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.js')) {
    const routePath = resolve(__dirname, 'routes', file);
    const routeUrl = new URL(`file://${routePath}`);

    import(routeUrl)
      .then((module) => {
        app.use('/api', module.default); // Assuming your route exports a default middleware
      })
      .catch((error) => console.error(`Error importing route ${routePath}:`, error));
  }
});

// CSRf

// Error handling middleware
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
