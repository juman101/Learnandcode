import express from 'express';
import cors from 'cors';
const morgan = require("morgan");
import {readdirSync} from 'fs';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();
mongoose.connect(process.env.DATABASE)
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));


// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route 
const routesPath = './routes';

readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.js')) {
    const route = require(`./routes/${file}`);
    app.use("/api", route);
  }
});

// port 
const port =8001;

app.listen(port, () => console.log(`Listening on port ${port}`));
