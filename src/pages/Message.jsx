import React, { useEffect, useState } from "react";
import SideMenuBar from "../components/SideMenuBar";
import FooterMenu from "../common/FooterMenu";

function Message() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth, size]);

  return (
    <div className=" w-full  h-full min-h-screen   ">

      <div className="w-full h-full md:h-screen flex gap-2 p-1  overflow-hidden">
        {size > 768 ? (
          <>
            <div className=" basis-[70%]  w-full h-full   overflow-hidden  rounded-md ">
            
            </div>

            <div className="basis-[30%] shadow-inner bg-slate-100 rounded-md p-2">
              <SideMenuBar />
            </div>
          </>
        ) : (
          <>
            
            <FooterMenu />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Message;
