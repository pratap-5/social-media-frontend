import React, { useState } from "react";
import useData from "../zustand/useData";

function useGetPost() {
  const { backendUrl } = useData();
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${backendUrl}/api/profile/getPosts`, {
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
      setLoading(false);
    }
  };

  return { loading, getPosts };
}

export default useGetPost;
