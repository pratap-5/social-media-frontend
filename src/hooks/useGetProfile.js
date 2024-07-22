import React, { useState } from "react";
import useData from "../zustand/useData";

function useGetProfile() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const getProfile = async (profileId) => {
    setloading(true);
    try {
      const res = await fetch(`${backendUrl}/api/profile/getProfile/${profileId}`, {
        credentials: "include",
      });
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

  return { loading, getProfile };
}

export default useGetProfile;
