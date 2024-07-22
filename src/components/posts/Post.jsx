import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useData from "../../zustand/useData";
import { FaCommentAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Post({ user }) {
  const navigate = useNavigate();
  const { backendUrl } = useData();
  const [isliked, setLike] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const handleTouchStart = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {
      setLike(!isliked);
    }

    setLastTap(currentTime);
  };

  return (
    <div
      onDoubleClick={() => setLike(!isliked)} //for pc versions
      onTouchStart={handleTouchStart} //this is for mobile versions
      className="w-full min-h-[300px]  bg-slate-100 rounded-md  md:min-h-[500px] p-2 flex flex-col items-center gap-1 shadow-inner"
    >
      <div className="  w-full      overflow-hidden   flex gap-2 items-center justify-between">
        <span
          onClick={() => navigate(`/profile/getProfile/${user.userId}`)}
          className="flex items-center justify-center gap-2 cursor-pointer  "
        >
          <img
            className="object object-cover w-[50px] h-[50px] rounded-full"
            src={`${backendUrl}/${user.userProfile}`}
            alt=""
          />

          <span className="flex flex-col ">
            <p className="font-semibold text-[20px] text-black">
              {user.fullName}
            </p>
            <p>{user.post.description}</p>
          </span>
        </span>

        <div className="flex items-center justify-center gap-3">
          <span
            onClick={() => setLike(!isliked)}
            className={`text-[25px] transition-all duration-200 cursor-pointer  ${
              isliked ? "text-[#ff0000] font-bold" : ""
            }`}
          >
            {isliked ? <FaHeart /> : <FaRegHeart />}
          </span>
          <span className="text-[23px] cursor-pointer  ">
            <FaCommentAlt />
          </span>
        </div>
      </div>

      <span className="w-full  md:min-h-[300px] flex-1  flex items-center justify-center">
        <img
          src={`${backendUrl}/${user.post.filePath}`}
          className="object object-cover h-full   "
          alt=""
        />
      </span>

      <span className=" w-full">
        <p className="font-semibold text-slate-900">
          {user.post.likes.length} likes
        </p>

        <p>{user.post.comments.length} comments</p>
      </span>
    </div>
  );
}

export default Post;
