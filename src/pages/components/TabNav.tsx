import React from "react";

export default function TabNav({ tab, setTab }: { tab?: any; setTab?: any }) {
  return (
    <ul className=" text-gray-500 flex gap-3">
      <li>
        <button
          type="button"
          onClick={() => setTab("gallery")}
          className={`${
            tab === "gallery"
              ? "bg-blue-500 text-white rounded-xl py-2 px-5"
              : "py-2 px-5"
          } `}
        >
          Gallery
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setTab("upload file")}
          className={`${
            tab === "upload file"
              ? "bg-blue-500 text-white rounded-xl py-2 px-5"
              : "py-2 px-5"
          } `}
        >
          Upload File
        </button>
      </li>
    </ul>
  );
}
