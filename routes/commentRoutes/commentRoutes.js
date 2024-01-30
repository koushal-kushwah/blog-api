const express = require('express');
const commentRouter = express.Router();
const {commentPostCtrl,
  commentGetById,
  commentGet,
  commentDelete,
  commentUpdate
} = require('../../controllers/commentCtrl/commentCtrl')


// post/api/v1/comment
commentRouter.post('/comment', commentPostCtrl)
// get/api/v1/comment/:id
commentRouter.get('/:id', commentGetById)
// get/api/v1/comment
commentRouter.get('/', commentGet)
// delete/api/v1/comment/:id
commentRouter.delete('/:id', commentDelete)
// put/api/v1/comment/:id
commentRouter.put('/:id', commentUpdate)

module.exports = commentRouter