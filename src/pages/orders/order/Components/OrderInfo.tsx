import React from "react";
import { date, formatDate } from "../../../components/date";

type OrderInfoProps = {
   orderInfo: {
      orderId: string;
      orderDate: string;
      paidDate: string;
      orderStatus: string;
      paymentMethod: string;
   };
};

export default function OrderInfo({ orderInfo }: OrderInfoProps) {
   return (
      <div className="total pt-6">
         <div className="flex items-center justify-between gap-4  mb-3">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
               Order ID
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">
               #{orderInfo?.orderId}
            </p>
         </div>
         <div className="flex items-center justify-between gap-4  mb-3">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
               Order Issue Date
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">
               {formatDate(orderInfo?.orderDate)}
            </p>
         </div>
         <div className="flex items-center justify-between gap-4  mb-3">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
               Order Status
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">
               {orderInfo?.orderStatus}
            </p>
         </div>
         <div className="flex items-center justify-between gap-4  mb-3">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
               Payment Method
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">
               {orderInfo?.paymentMethod === "cash_on_delivery"
                  ? "Cash on Delivery"
                  : orderInfo?.paymentMethod}
            </p>
         </div>
      </div>
   );
}
