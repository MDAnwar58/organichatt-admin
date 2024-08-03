import React from "react";

export default function Remember() {
  return (
    <div className="mt-3 flex items-center justify-end">
      {/* <div className="flex items-center">
        <input
          id="remember_me"
          name="remember"
          type="checkbox"
          defaultValue={1}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label
          htmlFor="remember_me"
          className="ml-2 block text-sm leading-5 text-gray-900"
        >
          Remember me
        </label>
      </div> */}
      <div className="text-sm leading-5">
        <a
          href="#"
          className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
