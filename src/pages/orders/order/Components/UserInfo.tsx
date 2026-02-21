import React from "react";
import { removeLeadingZero } from "../../../components/trancute";

type Props = {
   userInfo: {
      name: string;
      email: string;
      firstPhone: string;
      secondPhone: string;
      avatar: string;
      houseNo: string;
      zipCode: number;
      address: string;
   };
};

export default function UserInfo({ userInfo }: Props) {
   return (
      <>
         <h2 className="font-manrope font-bold text-2xl leading-10 text-black pb-6 border-b border-gray-200 flex flex-row items-center gap-3">
            {userInfo?.avatar ? (
               <img
                  src={userInfo?.avatar}
                  alt="Denim Jacket image"
                  className="w-12 h-12 rounded-full object-cover"
               />
            ) : null}
            <span>{userInfo?.name}</span>
         </h2>
         <div className="data py-6 border-b border-gray-200">
            <div className="flex items-center justify-between gap-4 mb-2">
               <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                  Email
               </p>
               <p className="font-medium text-lg leading-8 text-gray-600">
                  {userInfo?.email}
               </p>
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
               <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                  1st Phone
               </p>
               <p className="font-medium text-lg leading-8 text-gray-600">
                  +880 {removeLeadingZero(userInfo?.firstPhone)}
               </p>
            </div>
            <div className="flex items-center justify-between gap-4  mb-2">
               <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
                  2nd Phone
               </p>
               <p className="font-medium text-lg leading-8 text-gray-600">
                  +880 {removeLeadingZero(userInfo?.secondPhone)}
               </p>
            </div>
            {userInfo?.houseNo && (
               <div className="flex items-center justify-between gap-4  mb-3">
                  <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
                     House No.
                  </p>
                  <p className="font-medium text-lg leading-8 text-gray-600">
                     #{userInfo?.houseNo}
                  </p>
               </div>
            )}
            <div className="flex items-center justify-between gap-4  mb-3">
               <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
                  ZIP Code
               </p>
               <p className="font-medium text-lg leading-8 text-gray-600">
                  {userInfo?.zipCode}
               </p>
            </div>
            <p className="font-medium text-lg leading-8 text-gray-600">
               Address: {userInfo?.address}
            </p>
         </div>
      </>
   );
}
