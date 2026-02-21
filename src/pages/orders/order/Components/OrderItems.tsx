import React from "react";
import ProductRating from "./ProductRating";

type product = {
   id: number;
   name: string;
   brand: string | null;
   category: string;
   discount_price: string | null;
   image_url: string;
   refoundable: string;
   sub_category: string | null;
};

type Item = {
   id: number;
   product: product;
   qty: string;
   sale_price: string;
   sale_discount_price: number;
   weight_price: number;
   weight_discount_price: number;
   size_price: number;
   size_discount_price: number;
   size_number_price: number;
   size_number_discount_price: number;
   rating: string;
};

type Props = {
   items?: Item[] | any;
};

export default function OrderItems({ items }: Props) {
   // console.log(items);

   const productPrice = (order: any) => {
      const {
         sale_price,
         sale_discount_price,
         weight_price,
         weight_discount_price,
         size_price,
         size_discount_price,
         size_number_price,
         size_number_discount_price,
      } = order;
      var price = 0;
      if (weight_price !== null) {
         price = weight_discount_price
            ? Number(weight_price) - Number(weight_discount_price)
            : weight_price;
      } else if (size_price !== null) {
         price = size_discount_price
            ? Number(size_price) - Number(size_discount_price)
            : size_price;
      } else if (sale_price !== null) {
         price = sale_discount_price
            ? Number(sale_price) - Number(sale_discount_price)
            : sale_price;
      } else if (size_number_price !== null) {
         price = size_number_discount_price
            ? Number(size_number_price) - Number(size_number_discount_price)
            : size_number_price;
      }
      return price;
   };
   const productDiscountPrice = (order: any) => {
      const {
         sale_price,
         sale_discount_price,
         weight_price,
         weight_discount_price,
         size_price,
         size_discount_price,
         size_number_price,
         size_number_discount_price,
      } = order;
      var price = null;
      if (weight_price !== null) {
         price = weight_discount_price && weight_price;
      } else if (size_price !== null) {
         price = size_discount_price && size_price;
      } else if (sale_price !== null) {
         price = sale_discount_price && sale_price;
      } else if (size_number_price !== null) {
         price = size_number_discount_price && size_number_price;
      }
      return price;
   };

   return (
      <div className="w-full">
         <div className="grid md:grid-cols-1 2xs:grid-cols-2 grid-cols-1 space-y-3">
            {items && items?.length > 0
               ? items.map((order, i: number) => (
                    <div
                       key={i}
                       className="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row gap-5 transition-all duration-500 hover:border-gray-400"
                    >
                       <div className="img-box">
                          {order?.product?.image_url ? (
                             <img
                                src={order?.product?.image_url}
                                alt="Denim Jacket image"
                                className="w-full md:max-w-[122px] rounded-lg object-cover"
                             />
                          ) : null}
                       </div>
                       <div className="flex md:flex-row flex-col justify-between w-full">
                          <div>
                             <h2 className="font-medium text-xl leading-8 text-black">
                                {order?.product?.name}
                             </h2>
                             <p className="font-normal text-lg leading-5 text-gray-500 ">
                                By: {order?.product?.category}
                             </p>
                             <p className="font-normal text-sm leading-7 text-gray-500 ">
                                <span>Unit: {order?.qty}x</span>
                                {" - "}
                                <span>
                                   With Price:{" "}
                                   <span className="text-xs font-mono">৳</span>
                                   {productPrice(order) * order?.qty}
                                </span>
                             </p>
                             <div className="flex 3xs:hidden flex-row items-center">
                                <div>
                                   <span className="font-medium text-xl leading-8 text-gray-700">
                                      <span className="text-2xl">৳</span>
                                      {productPrice(order)}
                                   </span>{" "}
                                   {order?.sale_discount_price && (
                                      <span className="font-medium line-through text-xs leading-8 text-gray-500">
                                         <span className="text-[15px]">৳</span>
                                         {Number(order?.sale_price)}
                                      </span>
                                   )}
                                </div>
                             </div>
                             {/* <div className="flex items-center gap-[.1rem]">
                                <ProductRating rating={Number(4)} />
                             </div> */}
                          </div>
                          <div className="3xs:flex hidden flex-row items-center">
                             <div>
                                <span className="font-medium text-xl leading-8 text-gray-700">
                                   <span className="text-2xl">৳</span>
                                   {productPrice(order)}
                                </span>{" "}
                                {productDiscountPrice(order) !== null && (
                                   <span className="font-medium line-through text-xs leading-8 text-gray-500">
                                      <span className="text-[15px]">৳</span>
                                      {productDiscountPrice(order)}
                                   </span>
                                )}
                             </div>
                          </div>
                       </div>
                    </div>
                 ))
               : null}
         </div>
      </div>
   );
}
