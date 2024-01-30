
const globalErrHandler = (err,req,res,next ) => {
  // message
  const message = err.message;
  // stack
  const stack = err.stack;
  // status
  const status = err.status ? err.status : "Failed";

  const statusCode = err ?.statusCode ? err.statusCode : 500

  // send the response
  res.status(statusCode).json({
    message,
    stack,
    status,
  });
};

module.exports = globalErrHandler;