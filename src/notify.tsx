import React from "react";
import { toast } from "react-toastify";

function successMsg(msg) {
  toast.success(msg + " 😀", {
    position: "bottom-right",
    autoClose: 2100,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
function warningMsg(msg) {
  toast.warning("😱 " + msg, {
    position: "bottom-right",
    autoClose: 2100,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
function failMsg(msg) {
  toast.error(msg + " 😭", {
    position: "bottom-right",
    autoClose: 2100,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export { successMsg, warningMsg, failMsg };
