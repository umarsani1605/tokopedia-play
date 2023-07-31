import videoService from "../services/videoService.js";

class videoController {
  static async getAllVideo(_req, res) {
    try {
      const videos = await videoService.getAll();
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get videos: ${error}`,
      });
    }
  }
  
  static async getVideoById(req, res) {
    const {videoId} = req.params;
  
    try {
      const video = await videoService.getById(videoId);
  
      if (!video) {
        res.status(404).json({
          message: "Video is not found.",
        });
        return
      }
  
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get song: ${error}`,
      });
    }
  }
  
  static async addVideo(req, res) {
    const { video } = req.body;
  
    try {
      const addedVideo = await videoService.add(video);
      res.status(200).json({
        message: "Video added successfully.",
        video: addedVideo,
      });
    } catch (error) {
      res.status(500).json({
        message: `Failed adding video: ${error}`,
      });
    }
  }
  
  async addManyVideo(req, res) {
    const { videos } = req.body;
  
    try {
      const addedVideos = await videoService.addVideos(videos);
      res.status(200).json({
        message: "Videos added successfully.",
        videos: addedVideos,
      });
    } catch (error) {
      res.status(500).json({
        message: `Failed adding videos: ${error}`,
      });
    }
  }
}

export default videoController