import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function FormHeader({
  title,
  color,
  darkColor,
}: {
  title?: any;
  color?: any;
  darkColor?: any;
}) {
  const { pathname } = useLocation();
  const { id } = useParams();
  return (
    <div
      className={` bg-blue-300 ${
        pathname === "/product-create" || pathname === `/product-edit/${id}`
          ? "rounded-md"
          : "rounded-t-md"
      }`}
    >
      <h1
        className={`text-center py-2 font-mono text-xl ${
          color ? `text-${color}` : "text-gray-700"
        } font-semibold ${
          darkColor ? `dark:text-${darkColor}` : "dark:text-white"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}
