import mongoose from "mongoose";

export const NewsSchema = new mongoose.Schema({
  
    title: String,
    content: String,
});
  
module.exports = mongoose.model('News', NewsSchema);