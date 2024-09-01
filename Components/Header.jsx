import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formDate = new FormData();
    formDate.append("email", email);
    const response = await axios.post('/api/email',formDate);
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  };

  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="logo"
          className="w-[130] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium p-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg shadow shadow-black hover:text-white hover:bg-gray-600">
          註冊
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl ">Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          專注於分享真實生活經驗與技術學習的部落格。<br />
          記錄下每一個日常時刻、技術學習過程以及心得體會，為自己和讀者帶來持續的成長與啟發。
        </p>
        <form
          className="flex justify-between max-w-[600px] scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-lg shadow shadow-black"
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            placeholder="請輸入信箱"
            className="pl-4 rounded-lg  outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="border border-2 border-gray-300 py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white rounded-tr-lg rounded-br-lg"
          >
            免費訂閱電子報
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
