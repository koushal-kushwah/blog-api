const categoryModel = require('../../model/Category/categoryModel');

const categoryPostCrtl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "comment data"
    })
  } catch (error) {
    res.json(error.message)
  }
}



const categoryGetByIdCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get category data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

const categoryGetCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "get all category data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

const categoryDeleteCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "Delete category data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

const categoryUpdateCtrl =  async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "update category data"
    })
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  categoryPostCrtl,
  categoryGetByIdCtrl,
  categoryGetCtrl,
  categoryDeleteCtrl,
  categoryUpdateCtrl
}