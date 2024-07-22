import React, { useState } from "react";
import useData from "../../zustand/useData";

function ProfilePost({ post }) {
  const [clicked, setClicked] = useState(false);

  const { backendUrl } = useData();
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`h-[200px]  sm:h-[350px] transform hover:scale-[1.05] hover:z-50  transition-all duration-500 shadow-2xl cursor-pointer flex  items-center  flex-col  bg-slate-100 rounded-md p-1 *:
        ${clicked?" absolute  w-full   top-1 left-0 ":""}
        
        `}
    >
      <span className=" flex-1 overflow-hidden">
        <img
          className="h-full   rounded-md object object-cover"
          src={`${backendUrl}/${post?.filePath}`}
          alt=""
        />
      </span>
      <span className="  w-full  flex  justify-start gap-1 flex-col sm:text-[20px] text-[12px]">
        <p>{post?.comments.length} comments</p>
        <p>{post?.likes.length} likes</p>
      </span>
    </div>
  );
}

export default ProfilePost;
