import VideoService from "../services/videoService.js";

class VideoController {

  async getVideos(_req, res) {
    try {

      const videoService = new VideoService();

      const videos = await videoService.getAll();
      const videoThumbnailList = videos.map(video => {
        return {
          videoId: video.id,
          thumbnailUrl: video.thumbnailUrl,
        }
      })
      res.status(200).json(videoThumbnailList);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get videos: ${error}`,
      });
    }
  }

  async getVideoById(req, res) {
    const { id } = req.params;

    try {
      const video = await VideoService.getById(id);

      if (!video) {
        return res.status(404).json({
          message: "Video not found.",
        });
      }

      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get song: ${error}`,
      });
    }
  }

  async addVideo(req, res) {
    const { video } = req.body;

    try {
      const addedVideo = await VideoService.addVideo(video);
      res.status(200).json({ 
        message: "Video added successfully.", 
        video: addedVideo
      });
    } catch (error) {
      res.status(500).json({ 
        message: `Failed adding video: ${error}`,
      });
    }
  }

  async addVideos(req, res) {
    const { videos } = req.body;

    try {
      const addedVideos = await VideoService.addVideos(videos);
      res.status(200).json({ 
        message: "Videos added successfully.", 
        videos: addedVideos 
      });
    } catch (error) {
      res.status(500).json({ 
        message: `Failed adding videos: ${error}`,
      });
    }
  }
}

export default VideoController