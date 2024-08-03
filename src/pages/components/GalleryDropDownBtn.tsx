import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function GalleryDropDownBtn({
  galleryBtnDropdownHandle,
  galleryDropDownBtn,
  pathname,
  NavLinkActive,
  NavLink,
  SvgActive,
  Svg,
}: any) {
  return (
    <Fragment>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group ${
          pathname === "/gallery-category" ? NavLinkActive : NavLink
        } 
        ${pathname === "/gallery" ? NavLinkActive : NavLink} 
        ${
          pathname === "/gallery-trust-bin" ? NavLinkActive : NavLink
        } dark:text-white`}
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={galleryBtnDropdownHandle}
      >
        <svg
          className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 ${
            pathname === "/gallery-category" ? SvgActive : Svg
          } 
          ${pathname === "/gallery" ? SvgActive : Svg} 
          ${
            pathname === "/gallery-trust-bin" ? SvgActive : Svg
          } dark:text-gray-400 `}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          ></path>

          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Gallery
        </span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <ul
        id="dropdown-example"
        className={`${galleryDropDownBtn === false && "hidden"} py-2 space-y-2`}
      >
        <li>
          <Link
            to="/gallery-category"
            className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ${
              pathname === "/gallery-category" ? NavLinkActive : NavLink
            } ${
              pathname === "/gallery-category" ? NavLinkActive : NavLink
            } dark:text-white `}
          >
            Gallery Category
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ${
              pathname === "/gallery" ? NavLinkActive : NavLink
            } 
            ${pathname === "/gallery" ? NavLinkActive : NavLink} 
            ${
              pathname === "/gallery-trust-bin" ? NavLinkActive : NavLink
            } dark:text-white `}
          >
            Galleries
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
