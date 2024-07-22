import React, { useState } from "react";
import useData from "../zustand/useData";

function useDoUnollow() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const doUnfollow = async (profileId) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/profile/doUnfollow/${profileId}`,
        {
          method: "post",
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

  return { loading, doUnfollow };
}

export default useDoUnollow;
