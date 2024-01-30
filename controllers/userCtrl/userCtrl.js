const User = require('../../model/User/userModel');
const bcrypt = require('bcrypt');
const genrateToken = require('../../utils/genrateToken');
const {appErr} = require('../../utils/appErr')
// const getTokenFromHeader = require('../../utils/getTokenFromHeader');
// const verifyToken = require('../../utils/verifyToken');

const userRegisterCtrl = async (req,res, next) => {

  const { firstname, lastname, email, password } = req.body;

  try{
    // Check if email exist
    const userFound = await User.findOne({email});
    if(userFound){
      return next(appErr("User already exist", 500))
    }

    // hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    // Create User
    const user = await User.create({
      firstname,
      lastname,
      email,
      password : hashPassword
    });
    res.json({
      status : "Success",
      data : user
    })
  } 
  catch (error) {
    next(appErr(error.message));
  }
}


const userLoginCtrl = async (req,res) => {
  const {email, password } = req.body;
  try {
// check email is exist
const userFound = await User.findOne({email});
if(!userFound){
return res.json({
  msg : "Wrong Login Credential"
});
};

// verify Password
const isPasswordMatch = await bcrypt.compare(password, userFound.password)
if(!isPasswordMatch){
  return res.json({
    msg : "Wrong Login Credential"
  })
};
  res.json({
      status : "Success",
      data : {
        firstname  : userFound.firstname,
        lastname : userFound.lastname,
        email : userFound.email,
        isAdmin : userFound.isAdmin,
        token : genrateToken(userFound._id)
      }
    })
  } catch (error) {
    res.json(error.message)
  }
}


const userGetCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "all user route"
    })
  } catch (error) {
    res.json(error.message)
  }
}

const userDeleteCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "Delete user"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const userUpdateCtrl = async (req,res) => {
  try {
    res.json({
      status : "Success",
      data : "update user"
    })
  } catch (error) {
    res.json(error.message)
  }
}


const userProfileCtrl = async (req,res) => {
 
  try {
    // req.userAuth it is user id 
    const user = await User.findById(req.userAuth)
    res.json({
      status : "Success",
      data : "get user profile"
    })
  } catch (error) {
    next(appErr(error.message))
  }
}

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  userGetCtrl,
  userDeleteCtrl,
  userUpdateCtrl,
  userProfileCtrl
}