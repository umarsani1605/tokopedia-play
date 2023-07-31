import Video from '../models/videoModel.js';

class CommentService {

  async getAllComment(id) {

    try {
      const video = await Video.findOne({ _id: id })
  
      const comments = video.comments;

      return comments
    } catch (error) {
      console.log(error)
    }
    
  }

  async addComment(id, addedComment) {
    try {
      const video = await Video.findOne({ _id: id })

      video.comments.push(addedComment)

      video.save()
    } catch (error) {
      
    }
  }
}

export default CommentService