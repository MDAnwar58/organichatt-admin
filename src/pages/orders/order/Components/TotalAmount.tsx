import React from "react";

type TotalAmountProps = {
   totalAmount: number | string;
};

export default function TotalAmount({ totalAmount }: TotalAmountProps) {
   return (
      <div className="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
         <div className="total flex items-center justify-between">
            <p className="font-normal text-xl leading-8 text-black ">
               Total Amount
            </p>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-indigo-600">
               <span className="text-lg font-mono">৳</span>
               {totalAmount}
            </h5>
         </div>
      </div>
   );
}
