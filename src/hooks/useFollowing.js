import React, { useState } from "react";
import useData from "../zustand/useData";
import useDoFollow from "./useDoFollow";

function useFollowing() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const getFollowings= async (profileId) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/profile/followings/${profileId}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      if (data) return data;
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, getFollowings };
}

export default useFollowing;
