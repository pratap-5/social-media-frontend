import React, { useState } from "react";
import toast from "react-hot-toast";
import useData from "../zustand/useData";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { backendUrl } = useData();
  const login = async ({ emailOrUserName, password }) => {
    try {
     
      if (!checkData(emailOrUserName, password)) return;
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          emailOrUserName,
          password,
        }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      //localstorage

      localStorage.setItem("user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;

const checkData = (emailOrUserName, password) => {
  if (!emailOrUserName || !password) {
    toast.error("fiil all  the fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("password must be greater than six character");
    return false;
  }
  return true;
};
