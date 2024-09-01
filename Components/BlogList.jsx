import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-lg" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("1")}
          className={
            menu === "1" ? "bg-black text-white py-1 px-4 rounded-lg" : ""
          }
        >
          讀書筆記
        </button>
        <button
          onClick={() => setMenu("2")}
          className={
            menu === "2" ? "bg-black text-white py-1 px-4 rounded-lg" : ""
          }
        >
          前端技能
        </button>
        <button
          onClick={() => setMenu("3")}
          className={
            menu === "3" ? "bg-black text-white py-1 px-4 rounded-lg" : ""
          }
        >
          生活紀錄
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs &&
          blogs
            .filter((item) => (menu == "All" ? true : item.category == menu))
            .map((item, index) => {
              return (
                <BlogItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                />
              );
            })}
      </div>
    </div>
  );
};

export default BlogList;
