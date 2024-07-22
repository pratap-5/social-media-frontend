import React from "react";
import useData from "../../zustand/useData";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfileImg() {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  const { backendUrl } = useData();
  return (
    <span
      onClick={() => navigate(`/profile/getProfile/${authUser._id}`)}
      className=" w-full h-full  cursor-pointer hover:text-[#3b3b3b]  text-[30px]   overflow-hidden "
    >
      <img
        className="object object-cover w-full h-full rounded-full"
        src={`${backendUrl}/${authUser.profilePicPath}`}
        alt={authUser.fullName[0].toUpperCase()}
      />
    </span>
  );
}

export default ProfileImg;
