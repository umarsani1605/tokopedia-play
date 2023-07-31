import mongoose from "mongoose";

import { products, videos } from "./starterData.js";
import videoModel from "../models/videoModel.js";
import productModel from "../models/productModel.js";

// the purpose is to populate dummy data only

async function insertVideoReturnId() {
  try {
    const insertedVideos = await videoModel.insertMany(videos);
    
    const videoIds = [];

    insertedVideos.map((video) => {
      videoIds.push(video._id);
    });

    return videoIds;
    
  } catch (error) {
    throw error
  }
}

async function insertProducts(videoId, products) {
  try {
    const productIds = []

    let newProduct = new productModel(products[0]);
    let insertedProduct = await newProduct.save();
    productIds.push(insertedProduct._id);

    newProduct = new productModel(products[1]);
    insertedProduct = await newProduct.save();
    productIds.push(insertedProduct._id);

    await videoModel.findByIdAndUpdate(videoId, {
      products: productIds,
    });

  } catch (error) {
    throw error
  }
}

async function migrate() {
  
  let videoIds

  try {
    videoIds = await insertVideoReturnId();    
  } catch (error) {
    console.log('Error on migration, insert videos failed: ', error)
  }

  // add every first and second product to associated video, incrementally
  try {
    insertProducts(videoIds[0], [products[0], products[1]])
    insertProducts(videoIds[1], [products[0], products[1]])
    insertProducts(videoIds[2], [products[2], products[3]])
    insertProducts(videoIds[3], [products[2], products[3]])
    insertProducts(videoIds[4], [products[4], products[5]])
    insertProducts(videoIds[5], [products[6], products[7]])
  } catch (error) {
    console.log('Error on migration, insert products failed: ', error)
  }
}

export default migrate;
