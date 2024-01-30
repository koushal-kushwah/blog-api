const express = require('express');
const postRouter = express.Router();
const {
  postCtrl,
  postGetByIdCtrl,
  postGetAllCtrl,
  postDeleteCtrl,
  postUpdateCtrl
} = require('../../controllers/postCtrl/postCtrl');


// post/api/v1/post
postRouter.post('/post', postCtrl);
// get/api/v1/post/:id
postRouter.get('/:id', postGetByIdCtrl);
// get/api/v1/post
postRouter.get('/',postGetAllCtrl );
// delete/api/v1/post/:id
postRouter.delete('/:id',postDeleteCtrl );
// put/api/v1/post/:id
postRouter.put('/:id', postUpdateCtrl);

module.exports = postRouter