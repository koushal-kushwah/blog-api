// const mongoose = require("mongoose");
// require('dotenv').config();

// const dbConnect = async() => {
//   try {
//     mongoose.createConnection(process.env.MONGODB_URL);
//     console.log("DB Connected Successfully");
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// dbConnect();

// In your config/dbConnect file
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
