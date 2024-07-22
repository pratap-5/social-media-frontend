import React, { useEffect, useState } from "react";
import SideMenuBar from "../components/SideMenuBar";
import FooterMenu from "../common/FooterMenu";

import ProfileCard from "../components/profilecards/ProfileCard";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";

function SearchList() {
  const [size, setSize] = useState(window.innerWidth);
  const [users, setUsers] = useState();
  const { searchName } = useParams();
  const { loading, search } = useSearch();

  useEffect(() => {
    const fetchFollower = async () => {
      const profileData = await search(searchName);
      if (profileData) {
        setUsers(profileData);
      } else {
        console.error("Profile data is null or undefined");
      }
    };

    fetchFollower();
  }, [searchName]);

  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth, size]);
 
  return (
    <div className=" w-full  h-full  min-h-screen ">
      <div className="w-full h-full md:h-screen flex gap-2 p-1  overflow-hidden">
        {size > 768 ? (
          <>
            <div className=" basis-[70%]  w-full h-full   overflow-hidden  rounded-md ">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <ProfileCard headerName={"search results"} users={users} />
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
              <ProfileCard headerName={"search results"} users={users} />
            )}
            <FooterMenu />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default SearchList;
