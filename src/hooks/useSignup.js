import React, { useState } from "react";
import toast from "react-hot-toast";
import useData from "../zustand/useData";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { backendUrl } = useData();
  const signup = async ({
    imgfile,
    userName,
    fullName,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    try {
      if (
        !checkData(userName, fullName, email, password, confirmPassword, gender)
      )
        return;
      setLoading(true);

      const formData = new FormData();

      formData.append("image", imgfile);
      formData.append("userName", userName);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      formData.append("gender", gender);

      const res = await fetch(`${backendUrl}/api/auth/signup`, {
        method: "POST",
        credentials: "include",
        body: formData,
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

  return { loading, signup };
}

export default useSignup;

const checkData = (
  userName,
  fullName,
  email,
  password,
  confirmPassword,
  gender
) => {
  if (
    !fullName ||
    !userName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("fiil all  the fields");

    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password does not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be greater than six character");
    return false;
  }
  return true;
};
