import commentService from "../services/commentService.js";

class commentController {
  static async getComments(req, res) {
    try {
      const {videoId} = req.params;
      const comments = await commentService.getAll(videoId)
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({
        message: `Failed to get comments: ${error}`,
      });
    }
  }
  
  static async addComment(req, res) {
    try {
      const { videoId } = req.params;
      const { userName, text } = req.body

      if(!userName) {
        res.status(400).json({
          message: 'Username can not be empty'
        })
        return
      }

      if(!text) {
        res.status(400).json({
          message: 'Comment is empty'
        })
        return
      }

      const addedComment = await commentService.add(videoId, userName, text)
      
      res.status(200).json(addedComment);
    } catch (error) {
      res.status(500).json({
        message: `Failed to add comments: ${error}`,
      });
    }
  }
}

export default commentController