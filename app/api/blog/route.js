import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const { NextResponse, NextRequest } = require("next/server");
const fs = require("fs");  //Node.js 的 fs 模組，用於文件系統操作，例如讀取或刪除檔案

// 建立與數據庫的連接
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// 處理對 API 的 GET 請求
export async function GET(request) {
  // 請求的 URL 中提取名為 Id 的查詢參數（例如 /api/blog?Id=123）
  const blogId = request.nextUrl.searchParams.get("Id");
  if (blogId) {
    // BlogModel.findById(blogId) 是 Mongoose 提供的用來根據文檔的 _id 字段來查詢單個文檔的方法。
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    // BlogModel.find({}) 用來查詢 blogs 集合中的所有資料。
    const blogs = await BlogModel.find({});
    return NextResponse.json(blogs);
  }
}

// 處理對 API 的 POST 請求
export async function POST(request) {
  // 通過 request.formData() 方法解析請求中的表單資料。
  const formData = await request.formData();
  const timestamp = Date.now();

  // 獲取 image 資料
  const image = formData.get("image");
  // 將圖片轉換為字節數組（ArrayBuffer）。
  const imageByteData = await image.arrayBuffer();
  // 将字節數組轉換為 Buffer 對象。
  const buffer = Buffer.from(imageByteData);
  // 文件的保存路徑到 ./public/ 目錄下。
  const path = `./public/${timestamp}_${image.name}`;
  // writeFile 是 Node.js 的 fs/promises 模塊中的一個函式，用於將文件寫入到指定的 path 中。
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("blog saved");

  return NextResponse.json({ success: true, msg: "新增成功!" });
}

// 刪除
export async function DELETE(request) {
  // 從請求的 URL 中獲取查詢參數 id
  const id = await request.nextUrl.searchParams.get("id");
  // 根據取得的 id，程式碼使用 BlogModel.findById 方法從資料庫中查找對應的文章資料
  const blog = await BlogModel.findById(id);
  // 刪除照片: fs.unlink 方法用於刪除檔案，這裡的回調函數是空的，表示在刪除檔案後不執行任何操作
  fs.unlink(`./public${blog.image}`, () => {});
  // 根據文章的 id 從資料庫中刪除該文章
  await BlogModel.findByIdAndDelete(id);
  // 返回一個 JSON 格式的回應，通知客戶端文章已成功刪除
  return NextResponse.json({ success: true, msg: "文章已刪除" });
}
