import CommentService from "../services/commentService.js";

class CommentController {
  async getComments(req, res) {
    try {

      const id = req.params.videoId;
  
      const commentService = new CommentService()

      const comments = await commentService.getComments(id)
    } catch (error) {
      console.error('Error getting product list:', error);
    }
  }

  async addComment(req, res) {
    try {
      const { id, newComment} = req.params;
      const commentService = new CommentService()
      const addedComment = await commentService.addComment(id, newComment)
    } catch (error) {
      console.log(addedComment);
    }
  }
}

export default CommentController