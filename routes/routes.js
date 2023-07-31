import express from 'express'
import VideoController from '../controllers/videoController.js'
import ProductController from '../controllers/productController.js'
import CommentController from '../controllers/commentController.js'

const router = express.Router()

const videoController = new VideoController()
const productController = new ProductController()
const commentController = new CommentController()

router.get('/', videoController.getVideos)
router.get('/products/:videoId', productController.getProductsByVideoId)
router.get('/comments/:videoId', commentController.getComments)
router.get('/comments/add/:videoId', commentController.getComments)

export default router;