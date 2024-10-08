"use client";
import { assets } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "@/Components/Footer";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogsData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        Id: params.id,
      },
    });
    setData(response.data);
    console.log(data)
  };

  useEffect(() => {
    if (params?.id) {
      fetchBlogsData();
    }
  }, [params.id]);
  

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="logo"
              className="w-[130px] sm:w-auto"
            ></Image>
          </Link>
          <button className="flex items-center gap-2 font-medium p-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg shadow shadow-black hover:text-white hover:bg-gray-600">
            註冊
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="作者照片"
          ></Image>
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt="文章照片"
        ></Image>
        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media{" "}
          </p>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-black text-xl hover:animate-bounce"
              icon={faSquareFacebook}
            />
            <FontAwesomeIcon
              className="text-black text-xl hover:animate-bounce"
              icon={faSquareInstagram}
            />
            <FontAwesomeIcon
              className="text-black text-xl hover:animate-bounce"
              icon={faSquareGooglePlus}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
