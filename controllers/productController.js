import VideoService from "../services/videoService.js";
import ProductService from "../services/productService.js";

class ProductController {
  async getProductsByVideoId(req, res) {
    try {

      const id = req.params.videoId;
  
      const videoService = new VideoService()
      const productService = new ProductService()

      const products = await productService.getProductsByVideoId(id)
    } catch (error) {
      console.error('Error getting product list:', error);
    }
  }
}

export default ProductController