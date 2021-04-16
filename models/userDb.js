import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    email: String,
    url: String
})

export default mongoose.model("users", userSchema);