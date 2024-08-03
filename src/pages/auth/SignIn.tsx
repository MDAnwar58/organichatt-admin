import React, { useRef, useEffect, useState, Fragment } from "react";
import Email from "./components/Email";
import Password from "./components/Password";
import Remember from "./components/Remember";
import SignInBtn from "./components/SignInBtn";
import axiosClient from "../../axios-client";
import SignImg from "../../assets/images/login.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { failMsg } from "../../notify";
import { ToastContainer } from "react-toastify";

export default function SignIn() {
  const email = useRef();
  const password = useRef();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) return navigate("/dashboard");
  }, []);
  const signIn = async () => {
    try {
      const payload = {
        email: email.current.value,
        password: password.current.value,
      };
      const response = await axiosClient.post("/admin-sign-in", payload);
      if (response.data.status === "success") {
        Cookies.set("auth_token", response.data.data, { expires: 7 });
        navigate("/dashboard");
      } else if (response.data.status === "fail") {
        setPasswordError(true);
        failMsg(response.data.msg);
      }
    } catch (error) {
      if (error.response.data.errors.email) {
        setEmailError(true);
      }
      if (error.response.data.errors.password) {
        setPasswordError(true);
      }
    }
  };

  const emailErrorHandle = () => {
    if (emailError === true) {
      setEmailError(false);
    }
  };
  const passwordErrorHandle = () => {
    if (passwordError === true) {
      setPasswordError(false);
    }
  };
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src={SignImg} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <Email
              email={email}
              emailError={emailError}
              emailErrorHandle={emailErrorHandle}
            />
            <Password
              password={password}
              passwordError={passwordError}
              passwordErrorHandle={passwordErrorHandle}
            />
            <Remember />
            <SignInBtn signIn={signIn} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
}
