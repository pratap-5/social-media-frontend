import React, { useEffect, useState } from "react";
import Header from "../common/Header";

import FooterMenu from "../common/FooterMenu";
import SideMenuBar from "../components/SideMenuBar";

import Posts from "../components/posts/Posts";

function Home() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth, size]);

  return (
    <div className=" w-full  h-full  min-h-screen ">
      <Header />

      <div className="w-full h-full md:h-screen flex gap-2 p-1  overflow-hidden">
        {size > 768 ? (
          <>
            <div className=" basis-[70%]  w-full h-full   overflow-hidden  rounded-md ">
              <Posts />
            </div>

            <div className="basis-[30%] shadow-inner bg-slate-100 rounded-md p-2">
              <SideMenuBar />
            </div>
          </>
        ) : (
          <>
            <Posts />
            <FooterMenu />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
