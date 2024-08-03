import React from "react";
import { Link } from "react-router-dom";

export default function TableHeader({
  title,
  link,
  linkName,
  linkClassName,
  btnOnClick,
  button,
  buttonName,
  buttonClassName,
}: {
  title?: any;
  link?: any;
  linkName?: any;
  linkClassName?: any;
  btnOnClick?: any;
  button?: boolean;
  buttonName?: any;
  buttonClassName?: any;
}) {
  //   console.log(button);

  return (
    <div className=" flex justify-between mb-2">
      <h1 className=" text-xl font-mono font-semibold text-gray-500 dark:text-white/90">
        {title}
      </h1>
      {!button ? (
        <Link to={link} className={linkClassName}>
          {linkName}
        </Link>
      ) : (
        <button type="button" onClick={btnOnClick} className={buttonClassName}>
          {buttonName}
        </button>
      )}
    </div>
  );
}
