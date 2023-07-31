/* 
  Nama: Umar Sani
  ID: GG3FSUP0145
  Email: umarsani361@gmail.com
*/

import mongoose from "mongoose";
import router from "./routes/routes.js";
import express from "express";
import bodyParser from "body-parser";
import migrate from "./migrations/migration.js";
import 'dotenv/config'

async function startApp() {
  
  const APP_PORT = process.env.APP_PORT;
  const DB_URL = process.env.DATABASE_URL;
  
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(router);

  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }

  migrate()

  try {
    app.listen(APP_PORT, () => {
      console.log(`Application is running at http://localhost:${APP_PORT}`);
    });
  } catch (error) {
    console.error("Error starting the application:", error);
  }
}

startApp();
