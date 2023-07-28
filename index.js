// Nama: Umar Sani
// ID: GG3FSUP0145
// Email: umarsani361@gmail.com

const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, populateDatabase } = require('./db');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

PORT = 3000

async function startApp() {
  try {
    await connectDB();
    await populateDatabase();
    app.listen(PORT, () => {
      console.log('Server is running on port ', PORT);
    });
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

startApp();
