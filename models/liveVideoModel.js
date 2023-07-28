
const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: String,
  isOfficial: Boolean
})

const commentSchema = new mongoose.Schema({
  userName: String,
  comment: String,
  timestamp: Date
})

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  productUrl: String,
  price: Number
})

const liveVideoSchema = new mongoose.Schema({
  title: String,
  shop: shopSchema,
  viewerNumber: Number,
  products: [productSchema],
  comments: [commentSchema]
});

module.exports = mongoose.model("LiveVideo", liveVideoSchema);