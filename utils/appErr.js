

// Error with help of function
// appErr
const appErr = (message, statusCode) => {
  let error = new Error(message);
  error.statusCode = statusCode ? statusCode : 500;
  error.stack = error.stack;
  return error; 
};


// Error with help of class
// Err Class
class AppErr extends Error{
  constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;
    this.status = "Failed"
  }
};


module.exports = {appErr}

