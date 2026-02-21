import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type Props = {
   pathname: string;
   NavLinkActive: string;
   NavLink: string;
   SvgActive: string;
   Svg: string;
};

export default function SidebarOrdersItem({
   pathname,
   NavLinkActive,
   NavLink,
   SvgActive,
   Svg,
}: Props) {
   const orderCount = useSelector((state: any) => state.orderCount);

   return (
      <li>
         <Link
            to="/orders"
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
               pathname === "/orders" ? NavLinkActive : NavLink
            } group`}
         >
            <svg
               className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 
                               ${pathname === "/orders" ? SvgActive : Svg}
                               `}
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 18 21"
            >
               <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-blue-900 dark:text-blue-300">
               {orderCount}
            </span>
         </Link>
      </li>
   );
}
