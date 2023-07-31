import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String,
  productUrl: String
})

export default mongoose.model("Product", productSchema);