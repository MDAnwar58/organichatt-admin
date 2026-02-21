import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function EcommerceDropDownBtn({
   ecommerceBtnDropdownHandle,
   ecommerceDropDownBtn,
   pathname,
   NavLinkActive,
   NavLink,
   SvgActive,
   Svg,
   id,
}: {
   ecommerceBtnDropdownHandle?: any;
   ecommerceDropDownBtn?: any;
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
        ${pathname === "/brands" ? NavLinkActive : NavLink}
        ${pathname === "/brand-create" ? NavLinkActive : NavLink}
        ${pathname === `/brand-edit/${id}` ? NavLinkActive : NavLink}
        ${pathname === "/categories" ? NavLinkActive : NavLink} 
        ${pathname === "/category-create" ? NavLinkActive : NavLink} 
        ${pathname === `/category-edit/${id}` ? NavLinkActive : NavLink}
        ${pathname === "/sub-categories" ? NavLinkActive : NavLink} 
        ${pathname === "/sub-category-create" ? NavLinkActive : NavLink} 
        ${pathname === `/sub-category-edit/${id}` ? NavLinkActive : NavLink} 
        ${pathname === "/colors" ? NavLinkActive : NavLink} 
        ${pathname === "/color-create" ? NavLinkActive : NavLink} 
        ${pathname === `/color-edit/${id}` ? NavLinkActive : NavLink}  
        ${pathname === "/sizes" ? NavLinkActive : NavLink} 
        ${pathname === "/size-create" ? NavLinkActive : NavLink} 
        ${pathname === `/size-edit/${id}` ? NavLinkActive : NavLink} 
        ${pathname === "/size-numbers" ? NavLinkActive : NavLink} 
        ${pathname === "/size-number-create" ? NavLinkActive : NavLink} 
        ${pathname === `/size-number-edit/${id}` ? NavLinkActive : NavLink} 
        ${pathname === "/weights" ? NavLinkActive : NavLink} 
        ${pathname === "/weight-create" ? NavLinkActive : NavLink} 
        ${pathname === `/weight-edit/${id}` ? NavLinkActive : NavLink} 
        ${pathname === "/products" ? NavLinkActive : NavLink} 
        ${pathname === "/product-create" ? NavLinkActive : NavLink} 
        ${pathname === `/product-edit/${id}` ? NavLinkActive : NavLink} 
         dark:text-white`}
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
            onClick={ecommerceBtnDropdownHandle}
         >
            <svg
               className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 
          ${pathname === "/brand-create" ? SvgActive : Svg}
          ${pathname === "/brands" ? SvgActive : Svg}
          ${pathname === `/brand-edit/${id}` ? SvgActive : Svg}
          ${pathname === "/categories" ? SvgActive : Svg} 
          ${pathname === "/category-create" ? SvgActive : Svg} 
          ${pathname === `/category-edit/${id}` ? SvgActive : Svg}
          ${pathname === "/sub-categories" ? SvgActive : Svg} 
          ${pathname === "/sub-category-create" ? SvgActive : Svg} 
          ${pathname === `/sub-category-edit/${id}` ? SvgActive : Svg}
          ${pathname === "/colors" ? SvgActive : Svg} 
          ${pathname === "/color-create" ? SvgActive : Svg} 
          ${pathname === `/color-edit/${id}` ? SvgActive : Svg} 
          ${pathname === "/sizes" ? SvgActive : Svg} 
          ${pathname === "/size-create" ? SvgActive : Svg} 
          ${pathname === `/size-edit/${id}` ? SvgActive : Svg} 
          ${pathname === "/size-numbers" ? SvgActive : Svg} 
          ${pathname === "/size-number-create" ? SvgActive : Svg} 
          ${pathname === `/size-number-edit/${id}` ? SvgActive : Svg} 
          ${pathname === "/weights" ? SvgActive : Svg} 
          ${pathname === "/weight-create" ? SvgActive : Svg} 
          ${pathname === `/weight-edit/${id}` ? SvgActive : Svg} 
          ${pathname === "/products" ? SvgActive : Svg} 
          ${pathname === "/product-create" ? SvgActive : Svg} 
          ${pathname === `/product-edit/${id}` ? SvgActive : Svg} 
           dark:text-gray-400 `}
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 18 20"
            >
               <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
               E-commerce
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
               ecommerceDropDownBtn === false && "hidden"
            } py-2 space-y-2`}
         >
            <li>
               <Link
                  to="/brands"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/brands" ? NavLinkActive : NavLink} 
            ${pathname === "/brand-create" ? NavLinkActive : NavLink} 
            ${pathname === `/brand-edit/${id}` ? NavLinkActive : NavLink}
             dark:text-white `}
               >
                  Brands
               </Link>
            </li>
            <li>
               <Link
                  to="/categories"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/categories" ? NavLinkActive : NavLink} 
            ${pathname === "/category-create" ? NavLinkActive : NavLink} 
            ${pathname === `/category-edit/${id}` ? NavLinkActive : NavLink}
             dark:text-white `}
               >
                  Categories
               </Link>
            </li>
            <li>
               <Link
                  to="/sub-categories"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/sub-categories" ? NavLinkActive : NavLink} 
            ${pathname === "/sub-category-create" ? NavLinkActive : NavLink} 
            ${
               pathname === `/sub-category-edit/${id}` ? NavLinkActive : NavLink
            } 
            dark:text-white`}
               >
                  Sub Category
               </Link>
            </li>
            <li>
               <Link
                  to="/colors"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/colors" ? NavLinkActive : NavLink} 
            ${pathname === "/color-create" ? NavLinkActive : NavLink} 
            ${pathname === `/color-edit/${id}` ? NavLinkActive : NavLink} 
            dark:text-white`}
               >
                  Colors
               </Link>
            </li>
            <li>
               <Link
                  to="/sizes"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/sizes" ? NavLinkActive : NavLink} 
            ${pathname === "/size-create" ? NavLinkActive : NavLink} 
            ${pathname === `/size-edit/${id}` ? NavLinkActive : NavLink} 
            dark:text-white`}
               >
                  Size
               </Link>
            </li>
            <li>
               <Link
                  to="/size-numbers"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/size-numbers" ? NavLinkActive : NavLink} 
            ${pathname === "/size-number-create" ? NavLinkActive : NavLink} 
            ${pathname === `/size-number-edit/${id}` ? NavLinkActive : NavLink} 
            dark:text-white`}
               >
                  Size Number
               </Link>
            </li>
            <li>
               <Link
                  to="/weights"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/weights" ? NavLinkActive : NavLink} 
            ${pathname === "/weight-create" ? NavLinkActive : NavLink} 
            ${pathname === `/weight-edit/${id}` ? NavLinkActive : NavLink}
            dark:text-white`}
               >
                  Weight
               </Link>
            </li>
            <li>
               <Link
                  to="/products"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group 
            ${pathname === "/products" ? NavLinkActive : NavLink} 
            ${pathname === "/product-create" ? NavLinkActive : NavLink} 
            ${pathname === `/product-edit/${id}` ? NavLinkActive : NavLink}
            dark:text-white`}
               >
                  Products
               </Link>
            </li>
         </ul>
      </Fragment>
   );
}
