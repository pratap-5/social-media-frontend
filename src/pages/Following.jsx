import React, { useEffect, useState } from "react";
import SideMenuBar from "../components/SideMenuBar";
import FooterMenu from "../common/FooterMenu";
import ProfileCard from "../components/profilecards/ProfileCard";

import useFollowing from "../hooks/useFollowing";
import { useParams } from "react-router-dom";

function Following() {
  const [size, setSize] = useState(window.innerWidth);

  const [users, setUsers] = useState();
  const { profileId } = useParams();

  const { loading, getFollowings } = useFollowing();

  useEffect(() => {
    const fetchFollowings = async () => {
      const profileData = await getFollowings(profileId);
      if (profileData) {
        setUsers(profileData);
      } else {
        console.error("Profile data is null or undefined");
      }
    };
    
    fetchFollowings();
  }, [profileId]);
  

  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth, size]);

  return (
    <div className=" w-full  h-full min-h-screen   ">
      <div className="w-full h-full md:h-screen flex gap-2 p-1  overflow-hidden">
        {size > 768 ? (
          <>
            <div className=" basis-[70%]  w-full h-full    overflow-hidden  rounded-md ">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <ProfileCard headerName={"followings"} users={users} />
              )}
            </div>

            <div className="basis-[30%] shadow-inner bg-slate-100 rounded-md p-2">
              <SideMenuBar />
            </div>
          </>
        ) : (
          <>
            {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <ProfileCard headerName={"followings"} users={users} />
              )}
            <FooterMenu />
          </>
        )}
      </div>
    </div>
  );
}

export default Following;
