const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true, "Post title is required"],
    trim : true,
  },
  discription : {
    type : String,
    required : [true, "Post discription is required"],
  },
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "category",
    required : [true, "Post category is required"]
  },
  numViews : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user"
  }],
  likes : {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'user'
  },
  dislikes : {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'user'
  },
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref  : 'user',
    required : [true, "Please Author is required"]
  },
  photo : {
    type : String,
    required : [true, "Post Image is required"]
  }
},{
  timestamps : true
});

const post = mongoose.model('post',postSchema);
module.exports = post;