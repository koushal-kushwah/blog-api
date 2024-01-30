const getTokenFromHeader = require('../utils/getTokenFromHeader');
const verifyToken = require('../utils/verifyToken');
const {appErr} = require('../utils/appErr')
const isLogin = (req,res,next) => {
// get token from header
const token = getTokenFromHeader(req);
// verify token
const decodedUser = verifyToken(token);
// save user into re.obj
req.userAuth = decodedUser.id;
if(!decodedUser){
  return next(appErr("Invalid/Expired token, Please login again"));
}else{
  next();
}
}


module.exports = isLogin