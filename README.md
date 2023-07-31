# Tokopedia Play API clone for Generasi Gigih 3.0 Final Project

This repository contains RESTful API for Tokopedia Play clone. This API allows client to fetch videos, add video, fetch associated products, fetch comments, and add comment. This API build using Express.JS and MongoDB.

## Configuration

The environtment variables for this API:

```
APP_PORT=3000
DATABASE_URL=mongodb://localhost:27017/tokopedia_play
```

## How to run

To run the API in local:

1. Clone this repository
   
   ```
   git clone https://github.com/umarsani1605/tokopedia-play
   ```
  
3. Navigate to the folder
   
   ```
   cd tokopedia-play
   ```
   
5. Install the required dependency
   
   ```
   npm install
   ```
   
7. Run the app
   
   ```
   npm start
   ```

## Database Schema

The MongoDB database schema using for this API

### 1. Video collection schema

```javascript
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isOfficial: {
    type: Boolean,
    required: true
  },
})

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
})

const videoSchema = new mongoose.Schema({  
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  shop: {
    type: shopSchema,
    required: true
  },
  viewerNumber: {
    type: Number,
    default: 0,
    required: false
  },
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: productSchema,
  },
  comments: {
    type: [commentSchema],
  },
});
```

### 2. Product collection schema

```javascript
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true 
  },
  url: {
    type: String,
    required: true,
  },
})
```

## API Endpoints

### Video

Video object

```
{
    title: String,
    url: String,
    thumbnailUrl: String,
    viewerCount: Number,
    shop: {
      name: String,
      isOfficial: Boolean,
    },
    comments: [<comment_object>],
    products: [<product_object>]
  },
```

#### GET /

Return all videos in the system

- URL params

  None
  
- Data params
  
  None
  
- Header
  
  Content-Type: application/json
  
- Success response

  - Code

    200
  
  - Content
  
    ```
    [
      <video_object>,
      <video_object>,
      <video_object>,
    ]
    ```

#### GET /:videoId

Return specified video by videoId

- URL params
  
  _Required_ ```videoId: String```
  
- Data params
  
  None
  
- Header
  
  Content-Type: application/json
  
- Success response

  - Code
  
    200
  
  - Content
  
    ```
    <video_object>
    ```
- Error response

  - Code
  
    404
  
  - Content
  
    ```
    {
      "message": "Video is not found."
    }
    ```

### Product

Product object

```
  {
    name: String,
    price: Number,
    url: String,
    imageUrl: String
  },
```

#### GET /:videoId/products

Return associated product from a video

- URL params
  
  _Required_ ```videoId: String```
  
- Data params
  
  None
  
- Header
  
  Content-Type: application/json
  
- Success response

  - Code
  
    200
  
  - Content
  
    ```
    [
      <product_object>,
      <product_object>,
      <product_object>,
    ]
    ```

### Comment

Comment object

```
  {
    userMame: String,
    comment: String,
    timestamp: Date
  },
```

#### GET /:videoId/comments

Return associated comments from a video

- URL params
  
  _Required_ ```videoId: String```
  
- Data params
  
  None
  
- Header
  
  Content-Type: application/json
  
- Success response

  - Code
  
    200
  
  - Content
  
    ```
    [
      <comment_object>,
      <comment_object>,
      <comment_object>,
    ]
    ```

#### POST /:videoId/comments/add

Add specified comment in the body to video comments

- URL params
  
  _Required_ ```videoId: String```
  
- Data params
  
  ```
  {
    userName: String,
    text: String
  }
  ```
  
- Header
  
  Content-Type: application/json
  
- Success response

  - Code
  
    200
  
  - Content
  
    ```
    <comment_object>,
    ```

- Error response

  - Code
  
    400
  
  - Content
  
    ```
    {
      "message": "Username can not be empty"
    }
    ```

    or
      
    ```
    {
      "message": "Comment is empty"
    }
    ```
