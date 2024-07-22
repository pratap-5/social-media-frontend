import React, { useState } from "react";
import useData from "../zustand/useData";

function useFollower() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const getFollowers = async (profileId) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/profile/followers/${profileId}`,
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

  return { loading, getFollowers };
}

export default useFollower;
