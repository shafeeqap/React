import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database is connected:${connect.connection.host}`);
  } catch (error) {
    console.log(`MongoDB error:${error}`);
    process.exit(1);
  }
};

export default connectDB;
