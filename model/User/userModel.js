const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstname : {
    type : String,
    required : [true, "First name is required"],
  },
  lastname : {
    type : String,
    required : [true, "Last name is required"],
  },
  profilePhoto : {
    type : String,
  },
  email : {
    type : String,
    required : [true, "Email is required"]
  },
  password : {
    type : String,
    required : [true, "Password is required"]
  },
  postconunt : {
    type : String,
    default : 0
  },
  isblocked : {
    type : Boolean,
    default : false
  },
  isAdmin : {
    type : Boolean,
    default : false,
  },
  role : {
    type : String,
    enum : ['Admin','Guest','Editor']
  },
  viewedBy : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },],
  followers : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user"
  }],
  following : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user"
  }],
  active : {
    type :Boolean,
    default : true
  },
  post : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "post"
  }],
});

const User = mongoose.model('user', userSchema);
module.exports = User;