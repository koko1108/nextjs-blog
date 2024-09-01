import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ image, title, category, description, id }) => {
  const categoryMap = {
    1: "讀書筆記",
    2: "前端技能",
    3: "生活紀錄",
  };
  
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-lg hover:shadow-[8px_8px_0px_#00000061] hover:-translate-x-1 hover:-translate-y-2 transition-transform duration-500">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className=" rounded-tl-lg rounded-tr-lg"
        />
      </Link>
      <p className="ml-5 mt-5 px-3 py-1 inline-block bg-black text-white text-sm rounded-lg">
        {categoryMap[category]}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700" 
        dangerouslySetInnerHTML={{__html:description.slice(0,10)}}
        ></p>
        <Link href={`/blogs/${id}`}>
          Read more
          <FontAwesomeIcon className="pl-3" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
