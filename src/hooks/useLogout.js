import React, { useState } from "react";
import useData from "../zustand/useData";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { backendUrl } = useData();
  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }

      setAuthUser(null);
      localStorage.clear()
      toast.success("logot successfully");
      return true;
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}

export default useLogout;
