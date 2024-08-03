import React from "react";
import { Link } from "react-router-dom";

export default function TableHeader() {
  return (
    <div className=" flex justify-between mb-2">
      <h1 className=" text-xl font-mono font-semibold dark:text-white">
        Category List
      </h1>
      <Link
        to="/admin/category-create"
        type="button"
        className=" bg-blue-500 text-white px-5 py-1 rounded-xl"
      >
        Create
      </Link>
    </div>
  );
}
