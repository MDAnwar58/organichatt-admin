import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../apiCalling/action";
import { useReactToPrint } from "react-to-print";
import { getOrderCount } from "../../../apiCalling/action";
import { removeLeadingZero } from "../../../components/trancute";
import { date } from "../../../components/date";

type Seller = {
   id: number;
   name: string;
   email: string;
   phone_number: string;
   avatar: string;
};

type ShippingInfo = {
   address: string;
   city_or_town: string;
   house_no: string | null;
   present_address: string;
   s_email: string;
   s_name: string;
   s_phone: string;
   zip_code: string;
};

type User = {
   avatar: string;
   id: number;
   phone_number: string;
   shippingInfo: ShippingInfo;
};

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
};

type Invoice = {
   id: number;
   items: Item[];
   order_status: string;
   paid_date: string | null;
   payment_method: string;
   total_amount: string;
   tran_id: string;
   updated_at: string;
   user: User;
   created_at: string;
};

export default function InvoiceContent() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const contentRef = useRef<HTMLDivElement>(null);
   const reactToPrintFn: any = useReactToPrint({ contentRef });
   const siteName = import.meta.env.VITE_APP_NAME as any;
   const imageUrl = `${
      import.meta.env.VITE_API_BASE_URL
   }/assets/images/organic-logo.png`;

   useEffect(() => {
      dispatch(getData(Number(id)) as any);
      dispatch(getOrderCount() as any);
   }, [id, dispatch]);

   const { invoice = {}, seller = {} } = useSelector((state: any) => state);
   const Invoice = invoice as Invoice;
   const Seller = seller as Seller;

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

   const totalDiscountPrice =
      Invoice?.items?.reduce((acc, item) => {
         return acc + Number(item?.product?.discount_price) * Number(item?.qty);
      }, 0) || 0;

   return (
      <>
         <div className="max-w-3xl mx-auto bg-white rounded drop-shadow-lg lg:my-6">
            <div ref={contentRef} className=" p-6">
               <div className="grid 5xs:grid-cols-2 grid-cols-1 5xs:items-center">
                  <div className="5xs:pt-0 pt-5">
                     {/*  Company logo  */}
                     <img
                        src={`${imageUrl}`}
                        alt="company-logo"
                        height={100}
                        width={100}
                        className="mx-auto 5xs:mx-0"
                     />
                  </div>
                  <div className="5xs:text-right text-center 5xs:pt-0 pt-5">
                     <p>{siteName}.</p>
                     <p className="text-gray-500 text-sm">{Seller?.email}</p>
                     <p className="text-gray-500 text-sm mt-1">
                        +880{removeLeadingZero(Seller?.phone_number)}
                     </p>
                     {/* <p className="text-gray-500 text-sm mt-1">
                        VAT: 8657671212
                     </p> */}
                  </div>
               </div>
               {/* Client info */}
               <div className="grid xs:grid-cols-2 grid-cols-1 items-center mt-8">
                  <div className="xs:text-left text-center">
                     <p className="font-bold text-gray-800">Bill to :</p>
                     <p className="text-gray-500">
                        Name: {Invoice?.user?.shippingInfo?.s_name}
                     </p>
                     <p className="text-gray-500">
                        Email: {Invoice?.user?.shippingInfo?.s_email}
                     </p>
                     {Invoice?.user?.phone_number && (
                        <p className="text-gray-500">
                           1st Phone: +880
                           {removeLeadingZero(Invoice?.user?.phone_number)}
                        </p>
                     )}
                     {Invoice?.user?.shippingInfo?.s_phone && (
                        <p className="text-gray-500">
                           2nd Phone: +880
                           {removeLeadingZero(
                              Invoice?.user?.shippingInfo?.s_phone
                           )}
                        </p>
                     )}
                     {Invoice?.user?.shippingInfo?.house_no && (
                        <p className="text-gray-500">
                           House No.: {Invoice?.user?.shippingInfo?.house_no}
                        </p>
                     )}
                     <p className="text-gray-500">
                        {Invoice?.user?.shippingInfo?.present_address}, zip
                        code: {Invoice?.user?.shippingInfo?.zip_code}
                     </p>
                  </div>
                  <div className="xs:text-right text-center">
                     <p>
                        Invoice Id:{" "}
                        <span className="text-gray-500">
                           #{Invoice?.tran_id}
                        </span>
                     </p>
                     <p>
                        Invoice date:{" "}
                        <span className="text-gray-500">
                           {date(Invoice?.created_at)}
                        </span>
                     </p>
                     {Invoice?.paid_date !== null && (
                        <p>
                           Due date:
                           <span className="text-gray-500">
                              {date(Invoice?.paid_date)}
                           </span>
                        </p>
                     )}
                  </div>
               </div>
               {/* Invoice Items */}
               <div className="-mx-4 mt-8 flow-root sm:mx-0">
                  <div className="overflow-x-auto">
                     <table className="min-w-full ">
                        <colgroup>
                           <col className="w-full sm:w-1/2" />
                           <col className="sm:w-1/6" />
                           <col className="sm:w-1/6" />
                           <col className="sm:w-1/6" />
                        </colgroup>
                        <thead className="border-b border-gray-300 text-gray-900">
                           <tr>
                              <th
                                 scope="col"
                                 className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                              >
                                 Items
                              </th>
                              <th
                                 scope="col"
                                 className=" px-3 py-3.5 text-right text-sm font-semibold text-gray-900 table-cell"
                              >
                                 Quantity
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 table-cell"
                              >
                                 Price
                              </th>
                              <th
                                 scope="col"
                                 className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                              >
                                 Amount
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {Invoice?.items && Invoice?.items?.length > 0
                              ? Invoice?.items.map((order, i) => (
                                   <tr
                                      key={i}
                                      className="border-b border-gray-200"
                                   >
                                      <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                                         <div className="font-medium text-gray-900">
                                            {order?.product?.name}
                                         </div>
                                         <div className="mt-1 truncate text-gray-500">
                                            {order?.product?.category}
                                         </div>
                                      </td>
                                      <td className="px-3 py-5 text-right text-sm text-gray-500 table-cell">
                                         {order?.qty}x
                                      </td>
                                      <td className="px-3 py-5 text-right text-xl text-gray-500 flex justify-end">
                                         <div className="flex flex-row items-center gap-1">
                                            <div>
                                               <span className="text-2xl">
                                                  ৳
                                               </span>
                                               {productPrice(order) *
                                                  Number(order?.qty)}
                                            </div>
                                            {productDiscountPrice(order) !==
                                               null && (
                                               <div className="text-gray-400 text-sm line-through">
                                                  <span className="text-2xl">
                                                     ৳
                                                  </span>
                                                  {productDiscountPrice(order)}
                                               </div>
                                            )}
                                         </div>
                                      </td>
                                      <td className="py-5 pl-3 pr-4 text-right text-xl text-gray-500 sm:pr-0">
                                         <span className="text-2xl">৳</span>
                                         {Number(order?.sale_price)}
                                      </td>
                                   </tr>
                                ))
                              : null}
                        </tbody>
                        <tfoot>
                           <tr>
                              <th
                                 scope="row"
                                 colSpan={3}
                                 className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                              >
                                 Subtotal
                              </th>
                              <th
                                 scope="row"
                                 className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                              >
                                 Subtotal
                              </th>
                              <td className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                                 <span className="text-xl">৳</span>
                                 {Number(Invoice?.total_amount)}
                              </td>
                           </tr>
                           {/* <tr>
                              <th
                                 scope="row"
                                 colSpan={3}
                                 className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                              >
                                 Tax
                              </th>
                              <th
                                 scope="row"
                                 className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                              >
                                 Tax
                              </th>
                              <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                                 $1,050.00
                              </td>
                           </tr> */}
                           {/* <tr>
                              <th
                                 scope="row"
                                 colSpan={3}
                                 className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                              >
                                 Discount
                              </th>
                              <th
                                 scope="row"
                                 className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                              >
                                 Discount
                              </th>
                              <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                                 - <span className="text-xl">৳</span>
                                 {totalDiscountPrice}
                              </td>
                           </tr> */}
                           <tr>
                              <th
                                 scope="row"
                                 colSpan={3}
                                 className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                              >
                                 Total
                              </th>
                              <th
                                 scope="row"
                                 className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                              >
                                 Total
                              </th>
                              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                                 <span className="text-xl">৳</span>
                                 {Number(Invoice?.total_amount)}
                              </td>
                           </tr>
                        </tfoot>
                     </table>
                  </div>
               </div>
               {/*  Footer  */}
               <div className="border-t-2 pt-4 text-xs text-gray-500 text-center mt-16">
                  Please pay the invoice before the due date. You can pay the
                  invoice by logging in to your account from our client portal.
               </div>
            </div>
         </div>

         <div className="max-w-3xl mx-auto text-end">
            <button
               type="button"
               className="bg-blue-500 text-white rounded-2xl px-11 py-3 text-xl font-medium"
               onClick={reactToPrintFn}
            >
               Print
            </button>
         </div>
      </>
   );
}
