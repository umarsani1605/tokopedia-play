require("dotenv").config();

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const fs = require("fs")

const Song = require("./models/songModel");
const Artist = require("./models/artistModel");
const PopularSong = require("./models/popularSongModel");

function readJSONFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}

async function connectDB() {
  try {
    await mongoose.connect(mongoString);
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

async function populateDatabase() {

  const sampleData = readJSONFile("./sampleData.json");

  try {
    await Song.insertMany(sampleData.songsData);
    await Artist.insertMany(sampleData.artistsData);
    await PopularSong.insertMany(sampleData.popularSongsData);
    console.log("Database populated succesfully.");
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
}

module.exports = { connectDB, populateDatabase };
