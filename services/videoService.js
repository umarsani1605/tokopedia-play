import Video from '../models/videoModel.js'

class VideoService {

  async getAll() {
    return await Video.find();
  }

  async getById(id) {
    let video
    try {
      video = Video.find({id: id});
    } catch (error) {
      throw console.log("Error")
    }
    return video;
  }

  async addVideo(video) {
    Video.create(video);
    return video;
  }

  async addVideos(videos) {
    await Video.insertMany(videos);
    return videos;
  }
}

export default VideoService