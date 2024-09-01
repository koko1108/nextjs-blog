"use client";
import BlogTableItems from "@/Components/AdminComponents/BlogTableItems";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data);
  };

  const deleteBlog = async (Id) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: Id,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchBlogs();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[1028px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                作者
              </th>
              <th scope="col" className="px-6 py-3">
                標題
              </th>
              <th scope="col" className="px-6 py-3">
                日期
              </th>
              <th scope="col" className="px-6 py-3">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((item, index) => {
                return (
                  <BlogTableItems
                    key={index}
                    mongoId={item._id}
                    title={item.title}
                    author={item.author}
                    authorImg={item.authorImg}
                    date={item.date}
                    deleteBlog={deleteBlog}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
