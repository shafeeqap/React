import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    age:{
        type: String,
        required: true
    },
})

export const User = mongoose.model('users', userSchema)