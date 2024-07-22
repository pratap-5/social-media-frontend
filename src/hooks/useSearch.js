import React, { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";

function useSearch() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const search = async (searchName) => {
    setloading(true);

    if (searchName.length < 3) {
      toast.error("character must be grater than three");
      return;
    }
    try {
      const res = await fetch(
        `${backendUrl}/api/profile/search/${searchName}`,
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
      // setSearchList(data.searchList);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, search };
}

export default useSearch;
