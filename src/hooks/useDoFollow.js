import React, { useState } from "react";
import useData from "../zustand/useData";

function useDoFollow() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const doFollow = async (profileId) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/profile/doFollow/${profileId}`,
        {

        method:"post",
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

  return { loading, doFollow };
}

export default useDoFollow;
