import React, { useRef } from "react";
import ProfileImg from "./profiles/ProfileImg";
import { BsMessenger } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";

import { ImHome3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/AuthContext";

function SideMenuBar() {
  const parentMenu = useRef();
  const { loading, logout } = useLogout();

  const { authUser } = useAuthContext();

  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full  flex items-center justify-between p-2">
        <span>
          <p className="text-[25px] font-bold">{authUser.fullName}</p>
          <p className="text-[15px] font-semibold">{authUser.userName}</p>
        </span>
        <div className="w-[200px] h-[200px] ">
          <ProfileImg />
        </div>
      </div>
      <div className="divider"></div>

      <div className="  w-full grid grid-cols-3 p-3 gap-2 capitalize">
        <div
          onClick={() => navigate("/")}
          className="btn btn-ghost  bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <ImHome3 />
        </div>
        <div
          onClick={() => navigate("/messages")}
          className=" btn btn-ghost bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <BsMessenger />
        </div>
        <div
          onClick={() => {
            navigate("/notifications");
          }}
          className=" btn btn-ghost bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <span className="  cursor-pointer hover:text-[#3b3b3b] relative text-[30px] ">
            <IoIosNotifications />
            <span className="  absolute  bg-[#ff005d]  w-[13px] h-[13px] rounded-full top-0 right-0 text-center flex justify-center items-center text-[10px] font-bold  text-black">
              1
            </span>
          </span>
        </div>
        <div
          onClick={() => navigate("/settings")}
          className=" btn btn-ghost bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <IoSettingsSharp />
        </div>
        <div
          onClick={() => navigate("/createPost")}
          className=" btn btn-ghost bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <FaPlusCircle />
        </div>
        <div
          onClick={() => {
            if (logout()) navigate("/");
          }}
          className="btn btn-ghost  bg-slate-200 h-[100px] rounded-md flex items-center justify-center p-2 text-black font-semibold text-[22px] hover:bg-slate-300 cursor-pointer "
        >
          <RiLogoutBoxFill />
        </div>
      </div>
    </>
  );
}

export default SideMenuBar;
