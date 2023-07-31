import express from 'express'
import videoController from '../controllers/videoController.js'
import productController from '../controllers/productController.js'
import commentController from '../controllers/commentController.js'

const router = express.Router()

router.get('/', videoController.getAllVideo)
router.get('/:videoId', videoController.getVideoById)
router.get('/:videoId/products', productController.getProductsByVideoId)
router.get('/:videoId/comments', commentController.getComments)
router.get('/:videoId/comments/add', commentController.addComment)

export default router;