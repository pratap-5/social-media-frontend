import React, { useRef, useState } from "react";

import { GiSelfLove } from "react-icons/gi";
import Search from "../components/header/Search";
import { useNavigate } from "react-router-dom";
  

function Header() {
  const navigate = useNavigate();

  return (
    <header className="  bg-[#160b27]   sm:rounded-b-[40px]   rounded-b-[20px]  w-full h-[80px]  flex gap-4  items-center justify-between  px-5  text-white ">
      <h1
        onClick={() => navigate("/")}
        className=" md:text-4xl text-3xl font-bold  flex capitalize "
      >
       chat
        <span className="flex justify-center items-center text-[#ed345f]">
          <GiSelfLove />
        </span>
      </h1>

      <Search />
    </header>
  );
}

export default Header;
