import React from "react";

import { ImHome3 } from "react-icons/im";
import { FaPlusCircle, FaSearch } from "react-icons/fa";

import { BsMessenger } from "react-icons/bs";
import ProfileImg from "../components/profiles/ProfileImg";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

function FooterMenu() {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#160b27]   w-full h-[60px]  flex gap-4  items-center justify-between  text-3xl z-10 fixed  right-0  bottom-[-1px]  ">
      <span
        onClick={() => navigate("/")}
        className=" w-[50px] h-[50px]  flex items-center justify-center "
      >
        <ImHome3 />
      </span>

      <span
        onClick={() => navigate("/createPost")}
        className=" w-[50px] h-[50px]   flex items-center justify-center "
      >
        <FaPlusCircle />
      </span>

      <span
        onClick={() => navigate("/messages")}
        className=" w-[50px] h-[50px]   flex items-center justify-center "
      >
        <BsMessenger />
      </span>

      <span
        onClick={() => navigate("/settings")}
        className=" w-[50px] h-[50px]   flex items-center justify-center"
      >
        <IoSettingsSharp />
      </span>

      <span className=" w-[30px] h-[30px]   flex items-center justify-center">
        <ProfileImg />
      </span>
    </div>
  );
}

export default FooterMenu;
