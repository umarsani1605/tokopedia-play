import Video from '../models/videoModel.js';

class commentService {
  static async getAll(id) {

    try {
      const video = await Video.findOne({ _id: id })
      
      if(!video) {
        throw new Error("Video is not found. Can't fetch the comment");
      }
  
      const comments = video.comments;
      return comments
    } catch (error) {
      throw new Error("Error loading the comments: ", error);
    }
  }
  
  static async add(id, username, text) {
    try {
      const video = await Video.findOne({ _id: id })
  
      if(!video) {
        throw new Error("Video is not found. Can't add the comment");
      }

      const newComment = {
        userName: username,
        comment: text,
        timestamp: new Date()
      }

      console.log(newComment)
  
      video.comments.push(newComment)
      video.save()
      
      return newComment
    } catch (error) {
      throw new Error("Error adding the comment: ", error);
    }
  }
}

export default commentService