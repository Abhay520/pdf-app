import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    userName : String,
    password : String,
    sessionCount : Number
})

export const User = mongoose.model('User', userSchema)