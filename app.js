require('dotenv').config();
require('./config/dbConnect');
const expess = require('express');
const globalErrHandler = require('./middleware/globalErrHandler')
const userRouter = require('./routes/userRoutes/userRoutes');
const postRouter = require('./routes/postRoutes/postRoutes');
const commentRouter = require('./routes/commentRoutes/commentRoutes');
const categoryRouter = require('./routes/categoryRoutes/categoryRoutes')


const app = expess();


// middlewares
app.use(expess.json());

const userAuth = {
  isLogin : true,
  isAdmin : false
}

app.use((req,res,next) => {
if(userAuth.isLogin){
  next();
}
else{
  return res.json({
    msg : "Invalide logic credentials"
  })
}
});

// routes
app.use('/api/v1/user',userRouter);
app.use('/api/v1/postRouter',postRouter);
app.use('/api/v1/commentRouter',commentRouter);
app.use('/api/v1/categoryRouter',categoryRouter);


// Error handlers middleware
app.use(globalErrHandler);

// 404 error
app.use("*", (req,res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    message : `${req.originalUrl} - Route not found`
  })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on  PORT ${PORT}`)
});



