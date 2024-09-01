"use client"; // 強制指定組件在客戶端渲染，用來處理非靜態HTML、需要互動和動態的內容
import Header from "@/Components/Header";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark"/>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
