import React, { useState } from "react";
import toast from "react-hot-toast";
import useData from "../zustand/useData";

function useDoPost() {
  const [loading, setLoading] = useState();
  const { backendUrl } = useData();
  const doPost = async ({ file, desc }) => {
    setLoading(true);
    if (!checkData(file, desc)) return;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("description", desc);

    try {
      const res = await fetch(`${backendUrl}/api/uploads/upload_file`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }

      toast.success("posted successfully");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { loading, doPost };
}

export default useDoPost;

const checkData = (file, desc) => {
  if (!file) {
    toast.error("plesea select  media");
    return false;
  }

  if (desc.length > 50) {
    toast.error("description must lessthan 50 characters ");
    return false;
  }

  return true;
};
