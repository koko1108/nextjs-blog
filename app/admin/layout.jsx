import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between w-full py-8 max-h-[60px] px-5 border-b border-slate-300">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              className="rounded-full shadow-md shadow-slate-900/20"
              src={assets.profile_icon}
              width={40}
              alt="頭像"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
