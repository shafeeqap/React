import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Students = mongoose.model("Students", studentsSchema);

export default Students;
