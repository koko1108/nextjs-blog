import mongoose from "mongoose";

// 從環境變量中讀取 MongoDB 連接字符串
const MONGODB_URI = process.env.MONGODB_URI;

// 與 MongoDB 連接，blog-app 是數據庫名稱（Database name）
export const ConnectDB =async()=>{
    await mongoose.connect(MONGODB_URI)
}