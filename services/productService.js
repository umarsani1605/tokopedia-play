import Video from '../models/videoModel.js';

class ProductService {

  async getProductsByVideoId(id) {
    try {
      const video = await Video.findOne({ _id: id }).populate('products');
  
      const associatedProducts = video.products;

      return associatedProducts
  
    } catch (error) {
      console.log(error)
    }
    
  }
}

export default ProductService