import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const BlogTableItems = ({ authorImg, mongoId, author, title, date, deleteBlog }) => {
  // 日期格式化函数
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          alt="作者頭像"
          className="rounded-full"
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{date ? formatDate(date) : "2024/8/25"}</td>
      <td onClick={()=>deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">
        <FontAwesomeIcon className="text-black" icon={faXmark} />
      </td>
    </tr>
  );
};

export default BlogTableItems;
