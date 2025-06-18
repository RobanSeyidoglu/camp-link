import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: String,
  description: String,
  category: String,
  priority: Number,
  status: String,
  active: Boolean,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
