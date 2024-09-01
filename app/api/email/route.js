import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
const { NextResponse, NextRequest } = require("next/server");


// 建立與數據庫的連接
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// 處理對 API 的 GET 請求
export async function GET(request) {
    const emails = await EmailModel.find({});
    return NextResponse.json(emails);
}

// 處理對 API 的 POST 請求
export async function POST(request) {
  // 通過 request.formData() 方法解析請求中的表單資料。
  const formData = await request.formData();
  const emailData={
    email: `${formData.get('email')}`,
  }
  await EmailModel.create(emailData);
  
  return NextResponse.json({ success: true, msg: "信箱訂閱成功!" });
}

// 刪除
export async function DELETE(request) {
  // 從請求的 URL 中獲取查詢參數 id
  const id = await request.nextUrl.searchParams.get("id");
  // 根據信箱的 id 從資料庫中刪除該信箱
  await EmailModel.findByIdAndDelete(id);
  // 返回一個 JSON 格式的回應，通知客戶端已成功刪除
  return NextResponse.json({ success: true, msg: "信箱已刪除" });
}
