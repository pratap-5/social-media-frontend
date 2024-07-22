import React, { useEffect, useState } from "react";
import ProfileImg from "../components/profiles/ProfileImg";
import Header from "../common/Header";
import ProfilePost from "../components/profiles/ProfilePost";
import { useNavigate, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile";
import useData from "../zustand/useData";

function Profile() {
  const size = window.innerWidth;
  const { profileId } = useParams();
  const [info, setInfo] = useState();

  const { loading, getProfile } = useGetProfile();
  const { backendUrl } = useData();
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile(profileId);
      if (profileData) {
        setInfo(profileData);
      } else {
        console.error("Profile data is null or undefined");
      }
    };

    fetchProfile();
  }, [profileId]);

  const navigate = useNavigate();
  return (
    <div className="">
      <Header />
      <div className="w-full h-screen  flex md:flex-row flex-col items-center justify-center  p-2 gap-2  ">
        <div className="  bg-slate-100  rounded-md basis-[40%] md:basis-[30%]   flex flex-col items-center   gap-2 p-1 w-full h-full  shadow-2xl">
          {/* for image  */}
          <div className="flex items-center justify-between  md:flex-col  w-full gap-1">
            <span className="flex flex-col md:items-center  md:order-1  ">
              <p className="text-black text-3xl font-bold text-justify">
                {info?.fullName || ""}
              </p>
              <p className="text-black text-2xl font-semibold text-justify">
                {info?.userName || ""}
              </p>
            </span>

            <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]  ">
              <span className=" w-full h-full  cursor-pointer hover:text-[#3b3b3b]  text-[30px]   overflow-hidden ">
                <img
                  className="object object-cover w-full h-full rounded-full"
                  src={`${backendUrl}/${info?.profilePicPath}`}
                  
                />
              </span>
            </div>
          </div>

          {/* for description */}
          <div className="font-semibold text-black md:text-[20px] w-full">
            <p>simple boy </p>
            <p>Wish me on 25dec </p>
            <p>own king </p>
          </div>

          {/* for buutons */}
          <div className="flex w-full  gap-2 ">
            <button
              onClick={() => navigate(`/profile/followings/${info?.profileId}`)}
              className="flex-1  btn w-full  bg-slate-800 md:text-xl capitalize "
            >
              Following {info?.following}
            </button>
            <button
              onClick={() => navigate(`/profile/followers/${info?.profileId}`)}
              className=" flex-1 btn w-full   bg-slate-800 md:text-xl capitalize"
            >
              followers {info?.followers}
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="basis-[60%] relative md:basis-[70%]  shadow-2xl flex flex-col h-full w-full p-1 overflow-hidden bg-slate-100 rounded-md  ">
          <span className="flex items-center justify-center gap-3 md:text-[30px] text-[20px]  font-semibold text-black  capitalize ">
            <p>post</p>
            <p>vedio</p>
          </span>

          <div className="   min-w-full flex-1 grid   grid-cols-2 sm:grid-cols-3  gap-2 p-3 overflow-y-scroll ">
            {info?.posts.map((post, ind) => (
              <ProfilePost post={post} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
