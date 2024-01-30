const express = require('express');
const categoryRouter = express.Router();
const {  categoryPostCrtl,
  categoryGetByIdCtrl,
  categoryGetCtrl,
  categoryDeleteCtrl,
  categoryUpdateCtrl} = require('../../controllers/categoryCtrl/categoryCtrl')


// post/api/v1/category
categoryRouter.post('/category', categoryPostCrtl)
// get/api/v1/category/:id
categoryRouter.get('/:id', categoryGetByIdCtrl)
// get/api/v1/category
categoryRouter.get('/', categoryGetCtrl)
// delete/api/v1/category/:id
categoryRouter.delete('/:id', categoryDeleteCtrl)
// put/api/v1/category/:id
categoryRouter.put('/:id',categoryUpdateCtrl)

module.exports = categoryRouter