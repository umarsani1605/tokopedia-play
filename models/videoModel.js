import mongoose from 'mongoose';
import productSchema from './productModel.js'

const shopSchema = new mongoose.Schema({
  name: String,
  isOfficial: Boolean
})

const commentSchema = new mongoose.Schema({
  userName: String,
  comment: String,
  timestamp: Date
})

const videoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String,
  shop: shopSchema,
  viewerNumber: Number,
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: productSchema,
  },
  comments: [commentSchema]
});

export default mongoose.model("Video", videoSchema);