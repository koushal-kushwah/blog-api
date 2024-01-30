const commentModel = require('../../model/Comment/commentModel')


const commentPostCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const commentGetById = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const commentGet = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get all comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

const commentDelete = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "Delete comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const commentUpdate = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "update comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}



module.exports = {
  commentPostCtrl,
  commentGetById,
  commentGet,
  commentDelete,
  commentUpdate
}