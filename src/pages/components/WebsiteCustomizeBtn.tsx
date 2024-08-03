import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function WebsiteCustomizeBtn({
  websideCustomizeBtnDropdownHandle,
  websideCustomizeDropDownBtn,
  pathname,
  NavLinkActive,
  NavLink,
  SvgActive,
  Svg,
  id,
}: {
  websideCustomizeBtnDropdownHandle?: any;
  websideCustomizeDropDownBtn?: any;
  pathname?: any;
  NavLinkActive?: any;
  NavLink?: any;
  SvgActive?: any;
  Svg?: any;
  id?: any;
}) {
  return (
    <Fragment>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group 
        ${pathname === "/banners" ? NavLinkActive : NavLink} 
        ${pathname === "/banner-create" ? NavLinkActive : NavLink} 
        ${pathname === `/banner-edit/${id}` ? NavLinkActive : NavLink} 
         dark:text-white`}
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={websideCustomizeBtnDropdownHandle}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
          className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 
                  ${pathname === "/banners" ? SvgActive : Svg}
                  ${pathname === "/banner-create" ? SvgActive : Svg}
                  ${pathname === `/banner-edit/${id}` ? SvgActive : Svg}
                  `}
        >
          <path
            d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z"
            fillRule="nonzero"
          />
        </svg>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Website Customize
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
        className={`${
          websideCustomizeDropDownBtn === false && "hidden"
        } py-2 space-y-2`}
      >
        <li>
          <Link
            to="/banners"
            className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/banners" ? NavLinkActive : NavLink} 
            ${pathname === "/banner-create" ? NavLinkActive : NavLink} 
            ${pathname === `/banner-edit/${id}` ? NavLinkActive : NavLink}
             dark:text-white `}
          >
            Banners
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
