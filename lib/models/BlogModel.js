import mongoose from "mongoose";

// 定義數據模型 (BlogModel)
const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.model("blog", Schema)：創建了一個名為 blog 的模型，並且這個模型會對應到 MongoDB 中的 blogs 集合。
// 集合名稱在 MongoDB 中，集合的名稱通常是模型名稱的小寫複數形式。如果你在 Mongoose 中定義模型名稱為 "blog"，MongoDB 中的集合名稱就會自動變為 "blogs"。
const BlogModel = mongoose.models.blog || mongoose.model("blog", Schema);

export default BlogModel;