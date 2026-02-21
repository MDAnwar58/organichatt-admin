import React, { Fragment } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import EcommerceDropDownBtn from "./EcommerceDropDownBtn";
import GalleryDropDownBtn from "./GalleryDropDownBtn";
import WebsiteCustomizeBtn from "./WebsiteCustomizeBtn";
import SidebarOrdersItem from "./SidebarOrdersItem";
import { useSelector } from "react-redux";
export default function SideBar({
   ecommerceBtnDropdownHandle,
   ecommerceDropDownBtn,
   galleryBtnDropdownHandle,
   galleryDropDownBtn,
   mobileSreenSideBar,
   websideCustomizeDropDownBtn,
   websideCustomizeBtnDropdownHandle,
}: any) {
   const { pathname } = useLocation();
   const { id } = useParams();

   const NavLinkActive = "bg-gray-100 dark:bg-gray-700";
   const NavLink = " hover:bg-gray-100 dark:hover:bg-gray-700";
   const SvgActive = "text-gray-900 dark:text-white";
   const Svg = "group-hover:text-gray-900 dark:group-hover:text-white";

   const isReadReviewCount = useSelector(
      (state: any) => state.isReadReviewCount
   );

   return (
      <Fragment>
         <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-[25] w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
               mobileSreenSideBar === false
                  ? "-translate-x-full"
                  : "transform-none"
            }`}
            aria-label="Sidebar"
         >
            {/* transform-none */}
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <Link
                        to="/dashboard"
                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                           pathname === "/dashboard" ? NavLinkActive : NavLink
                        } group`}
                     >
                        <svg
                           className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 ${
                              pathname === "/dashboard" ? SvgActive : Svg
                           }`}
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21"
                        >
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ms-3">Dashboard</span>
                     </Link>
                  </li>

                  <li>
                     <Link
                        to="/users"
                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                           pathname === "/users" ||
                           pathname === "/user-create" ||
                           pathname === `/user-edit/${id}`
                              ? NavLinkActive
                              : NavLink
                        } group`}
                     >
                        <svg
                           className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 ${
                              pathname === "/users" ||
                              pathname === "/user-create" ||
                              pathname === `/user-edit/:id`
                                 ? SvgActive
                                 : Svg
                           }`}
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 18"
                        >
                           <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Users
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/collections"
                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                ${pathname === "/collections" ? NavLinkActive : NavLink}
                ${pathname === "/collection-create" ? NavLinkActive : NavLink}
                ${
                   pathname === `/collection-edit/${id}`
                      ? NavLinkActive
                      : NavLink
                }
                 group`}
                     >
                        <svg
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21"
                           className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 
                  ${pathname === "/collections" ? SvgActive : Svg}
                  ${pathname === "/collection-create" ? SvgActive : Svg}
                  ${pathname === `/collection-edit/${id}` ? SvgActive : Svg}
                  `}
                        >
                           <path
                              d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682z"
                              fillRule="nonzero"
                           />
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Collection
                        </span>
                     </Link>
                  </li>
                  <li>
                     <EcommerceDropDownBtn
                        ecommerceBtnDropdownHandle={ecommerceBtnDropdownHandle}
                        ecommerceDropDownBtn={ecommerceDropDownBtn}
                        pathname={pathname}
                        NavLinkActive={NavLinkActive}
                        NavLink={NavLink}
                        SvgActive={SvgActive}
                        Svg={Svg}
                        id={id}
                     />
                  </li>
                  <li>
                     <Link
                        to="/offers"
                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  ${pathname === "/offers" ? NavLinkActive : NavLink} 
                  ${pathname === "/offer-create" ? NavLinkActive : NavLink} 
                  ${pathname === `/offer-edit/${id}` ? NavLinkActive : NavLink} 
                  group`}
                     >
                        <svg
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21"
                           className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 
                  ${pathname === "/offers" ? SvgActive : Svg}
                  ${pathname === "/offer-create" ? SvgActive : Svg}
                  ${pathname === `/offer-edit/${id}` ? SvgActive : Svg}
                  `}
                        >
                           <path d="M6.178 4c-.914-1.493-2.944-3-6.178-3v-1c4.011 0 6.415 2.11 7.314 4h6.159l10.527 10.625-9.375 9.375-10.625-10.581v-6.242l-.282-.128c-1.043-.476-2.226-1.015-3.718-1.015v-1c1.641 0 2.943.564 4 1.044v-2.078h2.178zm10.944 9.109c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.405-7.109c-.051.445-.215.83-.49 1.114-.387.398-.797.57-1.227.599.008.932.766 1.685 1.699 1.685.938 0 1.699-.761 1.699-1.699 0-.932-.751-1.69-1.681-1.699z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Offers
                        </span>
                     </Link>
                  </li>
                  <SidebarOrdersItem
                     pathname={pathname}
                     NavLinkActive={NavLinkActive}
                     NavLink={NavLink}
                     SvgActive={SvgActive}
                     Svg={Svg}
                  />
                  <li>
                     <Link
                        to="/reviews"
                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  ${pathname === "/reviews" ? NavLinkActive : NavLink} 
                  group`}
                     >
                        <svg
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21"
                           className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 
                  ${pathname === "/reviews" ? SvgActive : Svg}
                  `}
                        >
                           <path d="M6.178 4c-.914-1.493-2.944-3-6.178-3v-1c4.011 0 6.415 2.11 7.314 4h6.159l10.527 10.625-9.375 9.375-10.625-10.581v-6.242l-.282-.128c-1.043-.476-2.226-1.015-3.718-1.015v-1c1.641 0 2.943.564 4 1.044v-2.078h2.178zm10.944 9.109c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.405-7.109c-.051.445-.215.83-.49 1.114-.387.398-.797.57-1.227.599.008.932.766 1.685 1.699 1.685.938 0 1.699-.761 1.699-1.699 0-.932-.751-1.69-1.681-1.699z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Reviews
                        </span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-blue-900 dark:text-blue-300">
                           {isReadReviewCount}
                        </span>
                     </Link>
                  </li>
                  <li>
                     <GalleryDropDownBtn
                        galleryBtnDropdownHandle={galleryBtnDropdownHandle}
                        galleryDropDownBtn={galleryDropDownBtn}
                        pathname={pathname}
                        NavLinkActive={NavLinkActive}
                        NavLink={NavLink}
                        SvgActive={SvgActive}
                        Svg={Svg}
                     />
                  </li>
                  <li>
                     <WebsiteCustomizeBtn
                        websideCustomizeBtnDropdownHandle={
                           websideCustomizeBtnDropdownHandle
                        }
                        websideCustomizeDropDownBtn={
                           websideCustomizeDropDownBtn
                        }
                        pathname={pathname}
                        NavLinkActive={NavLinkActive}
                        NavLink={NavLink}
                        SvgActive={SvgActive}
                        Svg={Svg}
                        id={id}
                     />
                  </li>
                  {/* <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                     >
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           width={24}
                           height={24}
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              fillRule="evenodd"
                              d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                              clipRule="evenodd"
                           />
                           <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Kanban
                        </span>
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                           Pro
                        </span>
                     </a>
                  </li> */}
               </ul>
            </div>
         </aside>
      </Fragment>
   );
}
