import React from "react";

export default function SignInBtn({ signIn }: any) {
  return (
    <div className="mt-3">
      <span className="block w-full rounded-md shadow-sm">
        <button
          type="button"
          onClick={signIn}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
        >
          Sign in
        </button>
      </span>
    </div>
  );
}
