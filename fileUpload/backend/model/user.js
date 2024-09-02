import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

export const User = mongoose.model("User", UserSchema);
