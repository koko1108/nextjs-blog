import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5">
      <Image src={assets.logo_light} alt="logo" width={120} />
      <p className="text-white text-sm ">
        All right reserved.Copyright @blogger
      </p>
      <div className="flex justify-around items-center gap-2">
        <FontAwesomeIcon className="text-white text-xl hover:animate-bounce" icon={faSquareFacebook} />
        <FontAwesomeIcon className="text-white text-xl hover:animate-bounce" icon={faSquareInstagram} />
        <FontAwesomeIcon className="text-white text-xl hover:animate-bounce" icon={faSquareGooglePlus} />
      </div>
    </div>
  );
};

export default Footer;
