import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true 
  },
  url: {
    type: String,
    required: true,
  },
})

export default mongoose.model("Product", productSchema);