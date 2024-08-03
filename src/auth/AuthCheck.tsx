import { useState } from "react";
import axiosClient from "../axios-client";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export default function useAuthCheck() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    user: {},
  });
  async function authCheck() {
    const token = Cookies.get("auth_token");
    if (!token) {
      return navigate("/");
    }
    const repsonse = await axiosClient.post(`/auth-check`, { token: token });
    setAuth({
      user: repsonse.data.data,
    });
  }

  const signOut = () => {
    Cookies.remove("auth_token");
    setAuth({
      user: {},
    });
    navigate("/");
  };
  return { authCheck, auth, signOut };
}
