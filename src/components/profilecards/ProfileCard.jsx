import React, { useState } from "react";
import useData from "../../zustand/useData";
import useDoFollow from "../../hooks/useDoFollow";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useDoUnollow from "../../hooks/useDoUnfollow";
import toast from "react-hot-toast";

function ProfileCard({ headerName, users }) {
  const { backendUrl } = useData();
  const navigate = useNavigate();

  const { authUser } = useAuthContext();
  return (
    <div className="w-full h-[90%]">
      <h1 className="text-center text-3xl md:text-5xl font-bold capitalize ">
        {headerName || ""}
      </h1>
      <div className="divider"></div>
      <div className="w-full h-full bg-slate-100 flex flex-col  justify-start  gap-3 p-2 overflow-y-auto ">
        {users?.length < 1
          ? `no ${headerName} found`
          : users?.map((user, ind) => (
              <Card
                key={ind}
                user={user}
                backendUrl={backendUrl}
                navigate={navigate}
                authUser={authUser}
              />
            ))}
      </div>
    </div>
  );
}

export default ProfileCard;

const Card = ({ user, backendUrl, navigate, authUser }) => {
  const { loading, doFollow } = useDoFollow();
  const { loading: unloading, doUnfollow } = useDoUnollow();
  const [isFollowing, setIsFollowing] = useState(
    user?.followers.includes(authUser?._id)
  );

  return (
    <div className=" w-full min-h-[100px] md:min-h-[180px] bg-slate-200 grid grid-cols-1  grid-flow-col shadow-inner rounded-lg px-1">
      
        <div className="flex gap-2 items-center  ">
          <span
            onClick={() => navigate(`/profile/getProfile/${user?._id}`)}
            className="h-[80px] shadow-xl w-[80px]  md:h-[150px]  md:w-[150px] flex items-center justify-center rounded-full overflow-hidden"
          >
            <img
              className="h-full w-full rounded-full"
              src={`${backendUrl}/${user?.profilePicPath}`}
              alt=""
            />
          </span>
          <span>
            <p className="text-xl text-black font-bold">
              {user?.fullName || ""}
            </p>
            <p className=" font-semibold">{user?.userName || ""}</p>
          </span>
        </div>

        <span className="h-full flex items-end p-2">
          {authUser._id != user?.id ? (
            <button
              onClick={() => {
                if (isFollowing == false) {
                  if (doFollow(user?._id)) {
                    setIsFollowing(true);
                    toast.success(` you following ${user?.fullName}`);
                  }
                } else {
                  if (doUnfollow(user?._id)) {
                    setIsFollowing(false);
                    toast.success(` you unfollowed ${user?.fullName}`);
                  }
                }
              }}
              className="btn capitalize md:w-[150px] md:h-[70px]"
            >
              {isFollowing ? (
                unloading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "unfollow"
                )
              ) : loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "follow"
              )}
            </button>
          ) : (
            <span className="btn">you</span>
          )}
        </span>

    </div>
  );
};
