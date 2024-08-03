import React, { useState } from "react";
import { DarkModeIcon, LightModeIcon } from "./Icons";

export default function WebPageMode() {
  const [darkMode, setDarkMode] = useState(false);
  const modeHandle = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <button
      type="button"
      className=" bg-gray-100 rounded-full shadow-sm border me-5 mt-[.20rem] px-1 py-1"
      onClick={modeHandle}
    >
      {darkMode === false ? (
        <DarkModeIcon className={"text-2xl"} />
      ) : (
        <LightModeIcon className={"text-2xl"} />
      )}
    </button>
  );
}
