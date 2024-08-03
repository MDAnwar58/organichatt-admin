import React, { useState } from "react";
import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-[40vh] h-[50vh]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-[40vh] h-[50vh]" alt="React logo" />
        </a>
      </div>
      <h1 className=" text-3xl">Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className=" text-xl bg-slate-100 px-5 py-3 rounded-md my-3"
        >
          count is {count}
        </button>
        <br />
        <Link to="/admin/dashboard" className=" underline text-green-300">
          Dashboard
        </Link>
        <p className=" mt-3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
