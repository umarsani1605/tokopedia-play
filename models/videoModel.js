import mongoose from 'mongoose';
import productSchema from './productModel.js'

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isOfficial: {
    type: Boolean,
    required: true
  },
})

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
})

const videoSchema = new mongoose.Schema({  
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  shop: {
    type: shopSchema,
    required: true
  },
  viewerNumber: {
    type: Number,
    default: 0,
    required: false
  },
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: productSchema,
  },
  comments: {
    type: [commentSchema],
  },
});

export default mongoose.model("Video", videoSchema);