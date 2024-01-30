const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
post : {
  type : mongoose.Schema.Types.ObjectId,
  ref : "post",
  requied : [true, "Post is required"]
},
user : {
  type : Object,
  requied : [true, "user is required"]
},
description : {
  type : Object,
  requied : [true, "description is required"]
}
},{
  timestamps : true
});

const comment = mongoose.model('comment',commentSchema);
module.exports = comment;