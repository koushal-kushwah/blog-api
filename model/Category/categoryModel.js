const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
user : {
  type : mongoose.Schema.Types.ObjectId,
  ref : 'user',
  requied : true
},
title : {
  type : String,
  requied : true
}
},
{
  timestamps : true
});

const category = mongoose.model('category',categorySchema);
module.exports = category;