const postModel = require('../../model/Post/postModel')

const postCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "post data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const postGetByIdCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get post data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const postGetAllCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get all post data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const postDeleteCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "Delete post data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const postUpdateCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "update post data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  postCtrl,
  postGetByIdCtrl,
  postGetAllCtrl,
  postDeleteCtrl,
  postUpdateCtrl
}