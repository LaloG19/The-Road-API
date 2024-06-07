import mongoose from "mongoose";

export const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    lastname: String,
    password: String,
    rolename: String
});
  
module.exports = mongoose.model('Users', usersSchema);