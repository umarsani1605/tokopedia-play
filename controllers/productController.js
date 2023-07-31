import productService from "../services/productService.js";

class productController {
  static async getProductsByVideoId(req, res) {
    try {
      const {videoId} = req.params;
      const products = await productService.getAllById(videoId)
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get products: ${error}`,
      });
    }
  }
}

export default productController