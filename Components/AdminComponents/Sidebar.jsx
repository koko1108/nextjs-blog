import { assets } from "@/Assets/assets";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSquarePen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 shadow-lg">
      <div className="mx-auto py-5">
        <Image src={assets.logo} width={140} alt="logo" />
      </div>
      <div className="w-28 sm:w-60 h-[100vh] relative p-5 ">
        <div className="w-full ">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 font-medium px-3 py-2 rounded-md mb-2 hover:bg-slate-200 focus:shadow-outlin"
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            <p>新增文章</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 font-medium px-3 py-2 rounded-md mb-2 hover:bg-slate-200 focus:shadow-outlin"
          >
            <FontAwesomeIcon icon={faSquarePen} />
            <p>文章列表</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="flex items-center gap-3 font-medium px-3 py-2 rounded-md mb-2 hover:bg-slate-200 focus:shadow-outlin"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>訂閱電子報</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
