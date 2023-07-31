import Video from '../models/videoModel.js'

class videoService {
  static async getAll() {
    try {
      const videos = await Video.find();
      return videos
    } catch (error) {
      throw console.log("Error finding video: ", error)
    }
  }
  
  static async getById(id) {
    try {
      const video = Video.findOne({_id: id});
      if(!video) {
        throw new Error("Video is not found.");
      }
      return video;
    } catch (error) {
      throw console.log("Error finding video: ", error)
    }
  }
  
  static async add(video) {
    try {
      Video.create(video);
      return video
    } catch (error) {
      throw console.log("Error adding video: ", error)
    }
  }
  
  static async addMany(videos) {
    try {
      await Video.insertMany(videos);
      return videos;
    } catch (error) {
      throw console.log("Error adding videos: ", error)
    }
  }
}

export default videoService