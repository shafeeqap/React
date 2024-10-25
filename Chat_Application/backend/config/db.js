const { cyan, red } = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is connected ${connect.connection.host}`.blue.underline);
  } catch (error) {
    console.log(`MongoDB Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
