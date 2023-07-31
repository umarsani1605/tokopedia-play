import mongoose from "mongoose";

import { products, videos } from "./starterData.js";
import videoModel from "../models/videoModel.js";
import productModel from "../models/productModel.js";

async function insertVideos() {
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

async function insertUpdateProducts(videoId, products) {

  try {
    let productIds = []

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

// for the purpose to populate dummy data only

async function migrate() {
  const videoIds = await insertVideos();

  insertUpdateProducts(videoIds[0], [products[0], products[1]])
  insertUpdateProducts(videoIds[1], [products[0], products[1]])
  insertUpdateProducts(videoIds[2], [products[2], products[3]])
  insertUpdateProducts(videoIds[3], [products[2], products[3]])
  insertUpdateProducts(videoIds[4], [products[4], products[5]])
  insertUpdateProducts(videoIds[5], [products[6], products[7]])
}

export default migrate;
