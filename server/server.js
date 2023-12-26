import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { join, dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const mongoAtlasUri = 'mongodb+srv://jd:jd@cluster0.2yuw6he.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoAtlasUri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
const routesPath = './routes';

readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.js')) {
    // Use resolve to get the absolute path
    const routePath = resolve(__dirname, 'routes', file);

    // Convert the local file path to a URL
    const routeUrl = new URL(`file://${routePath}`);
    
    // Import the route dynamically
    import(routeUrl)
      .then((module) => {
        app.use('/api', module.default); // Assuming your route exports a default middleware
      })
      .catch((error) => console.error(`Error importing route ${routePath}:`, error));
  }
});

// Port
const port = 8001;

app.listen(port, () => console.log(`Listening on port ${port}`));
