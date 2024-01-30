const express = require('express');
const userRouter = express.Router();
const {
  userRegisterCtrl,userLoginCtrl,userGetCtrl,userDeleteCtrl,userUpdateCtrl,userProfileCtrl
} = require('../../controllers/userCtrl/userCtrl');
const isLogin = require('../../middleware/isLogin')


// post/api/v1/register
userRouter.post('/register',userRegisterCtrl);
// post/api/v1/user/login
userRouter.post('/login',userLoginCtrl);
// get/api/v1/user
userRouter.get('/',userGetCtrl);
// delete/api/v1/user/:id
userRouter.delete('/:id',userDeleteCtrl);
// put/api/v1/user/:id
userRouter.put('/:id',userUpdateCtrl);
// get/api/v1/user/profile/:id
userRouter.get('/profile/:id', isLogin, userProfileCtrl);



module.exports = userRouter