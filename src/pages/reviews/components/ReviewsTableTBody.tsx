import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { UpArrowIcon } from "../../components/Icons";
import { format } from "date-fns";
import DifferenceInDays from "../../components/DifferenceInDays";
import { formatDate } from "../../components/date";
import DropdownBtn from "../../components/DropdownBtn";
import { MoreSvgIcon } from "../../components/SvgIcons";

export default function ReviewsTableTBody({
   reviews,
   loading,
   onChangeOrderStatus,
   deleteHandle,
   page,
   limit,
}: {
   reviews?: any;
   loading?: boolean;
   onChangeOrderStatus?: any;
   deleteHandle?: any;
   page?: any;
   limit?: any;
}) {
   return (
      <tbody>
         {reviews.length > 0 ? (
            reviews.map((order, index) => {
               const filterItems = [
                  {
                     id: 1,
                     name: (
                        <Link to={`/order/${order?.id}`}>
                           <div className="w-28 py-1">View</div>
                        </Link>
                     ),
                  },
                  {
                     id: 2,
                     name: (
                        <Link to={`/order-invoice/${order?.id}`}>
                           <div className="w-28 py-1">Invoice</div>
                        </Link>
                     ),
                  },
                  {
                     id: 3,
                     name: (
                        <span>
                           <div
                              className="w-28 py-1"
                              onClick={() => deleteHandle?.(order?.id)}
                           >
                              Delete
                           </div>
                        </span>
                     ),
                  },
               ];
               return (
                  <tr
                     key={index + 1 + (page - 1) * limit}
                     className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                     <td className="px-6 py-4">
                        {" "}
                        {index + 1 + (page - 1) * limit}
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex flex-row items-center w-52">
                           <div>
                              <img
                                 src={order?.user?.avatar}
                                 className="h-11 w-11 border rounded-full shadow-sm"
                                 alt="banner image"
                              />
                           </div>
                           <div className="ms-3">{order?.user?.name}</div>
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex flex-row items-center w-52">
                           <div>
                              <img
                                 src={order?.product?.image_url}
                                 className="h-11 w-11 border rounded-full shadow-sm"
                                 alt="banner image"
                              />
                           </div>
                           <div className="ms-3">{order?.product?.name}</div>
                        </div>
                     </td>
                     <td className="px-6 py-4">{order?.rating}</td>
                     <td className="px-6 py-4">{order?.content}</td>
                     <td className="px-6 py-4">
                        {order?.is_read === 1 ? (
                           <span className="bg-green-400 text-white rounded-full px-3 py-[.05rem]">
                              Read
                           </span>
                        ) : (
                           <span className="bg-red-400 text-white rounded-full px-3 py-[.05rem]">
                              Unread
                           </span>
                        )}
                     </td>
                     <td className="px-6 py-4">
                        <div className="w-28">
                           {formatDate(order?.created_at)}
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <button
                           type="button"
                           className="text-sm text-red-500 p-1"
                           onClick={() => deleteHandle?.(order?.id)}
                        >
                           Delete
                        </button>
                        {/* <div className="flex flex-row items-center gap-1">
                           <DropdownBtn
                              dropdown={true}
                              filterItems={filterItems}
                              arrowIcon={false}
                              dropdownItemClassName="p-0"
                           >
                              <div className=" drop-shadow-sm bg-gray-50 border rounded-md px-1 py-1">
                                 <div className="text-gray-700 dark:text-gray-400 w-7 h-7">
                                    <MoreSvgIcon />
                                 </div>
                              </div>
                           </DropdownBtn>
                        </div> */}
                     </td>
                  </tr>
               );
            })
         ) : loading === true ? (
            <Loading colSpan={10} height={20} />
         ) : (
            <DataNotFound colSpan={10} />
         )}
      </tbody>
   );
}
