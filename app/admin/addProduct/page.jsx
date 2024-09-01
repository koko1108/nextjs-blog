"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "1",
    author: "koko",
    authorImg: "/authorImg.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // 在組件卸載或圖片變更時，釋放已創建的 URL。
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "1",
          author: "koko",
          authorImg: "/author_img.png",
        })
      }
    } catch (error) {
      toast.error("新增錯誤");
    }
  };

  return (
    <>
      <form className="pt-5 px-5 sm:pt-10 sm:pl-10" onSubmit={handleSubmit}>
        <p className="text-xl">上傳圖片</p>
        <label htmlFor="image">
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              width={240}
              height={140}
              className="mt-4"
            />
          ) : (
            <div className="w-[240px] h-[140px] bg-slate-100 border border-slate-300 text-slate-500 flex flex-col items-center justify-center mt-4 ">
              <FontAwesomeIcon icon={faCloudArrowUp} className="text-xl" />
              <p>Upload</p>
            </div>
          )}
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-5">標題</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          name="title"
          placeholder="請輸入標題"
          value={data.title} 
          onChange={onChangeHandler} 
          required
        />
        <p className="text-xl mt-5">內容</p>
        <textarea
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          name="description"
          value={data.description} 
          onChange={onChangeHandler} 
          placeholder="請輸入內容"
          rows={6}
          required
        />
        <p className="text-xl mt-5">類別</p>
        <select
          name="category"
          value={data.category} 
          onChange={onChangeHandler} 
          className="w-60 mt-4 px-4 py-4 border text-gray-500"
        >
          <option value="1">讀書筆記</option>
          <option value="2">前端技能</option>
          <option value="3">生活紀錄</option>
        </select>
        <button
          type="submit"
          className="my-8 w-40 h-12 bg-black text-white block hover:bg-gray-600"
        >
          送出
        </button>
      </form>
    </>
  );
};

export default Page;
