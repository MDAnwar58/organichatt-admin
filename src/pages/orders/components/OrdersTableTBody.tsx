import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { UpArrowIcon } from "../../components/Icons";
import { format } from "date-fns";
import DifferenceInDays from "../../components/DifferenceInDays";
import { formatDate } from "../../components/date";
import DropdownBtn from "../../components/DropdownBtn";
import { MoreSvgIcon } from "../../components/SvgIcons";
import { io } from "socket.io-client";

export default function OrdersTableTBody({
   orders,
   loading,
   onChangeOrderStatus,
   deleteHandle,
   page,
   limit,
   getOffers,
}: {
   orders?: any;
   loading?: boolean;
   onChangeOrderStatus?: any;
   deleteHandle?: any;
   page?: any;
   limit?: any;
   getOffers?: any;
}) {
   const localhost = import.meta.env.VITE_API_SOCKET_IO;
   const [newOrders, setNewOrders] = useState([]);

   useEffect(() => {
      const socket = io(localhost);
      socket.on("newOrder", (order) => {
         if (order === "newOrder") {
            getOffers();
         }
      });
   }, []);
   return (
      <tbody>
         {newOrders.length > 0
            ? newOrders.map((newOrder: any, index: number) => {
                 const filterItems = [
                    {
                       id: 1,
                       name: (
                          <Link to={`/order/${newOrder?.id}`}>
                             <div className="w-28 py-1">View</div>
                          </Link>
                       ),
                    },
                    {
                       id: 2,
                       name: (
                          <Link to={`/order-invoice/${newOrder?.id}`}>
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
                                onClick={() => deleteHandle?.(newOrder?.id)}
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
                       <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                       >
                          #{newOrder?.tran_id}
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex flex-row items-center w-52">
                             <div>
                                <img
                                   src={newOrder?.user?.avatar}
                                   className="h-11 w-11 border rounded-full shadow-sm"
                                   alt="banner image"
                                />
                             </div>
                             <div className="ms-3">{newOrder?.user?.name}</div>
                          </div>
                       </td>
                       <td className="px-6 py-4">{newOrder?.total}</td>
                       <td className="px-6 py-4">
                          <div className="w-28">
                             {formatDate(newOrder?.created_at)}
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <div className="w-28">
                             {formatDate(newOrder?.paid_date)}
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          {newOrder?.order_status === "pending" ? (
                             <div className="w-44">
                                <span className="bg-yellow-300 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                   Pending
                                </span>
                             </div>
                          ) : newOrder?.order_status === "processing" ? (
                             <div className="w-44">
                                <span className="bg-orange-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                   Processing
                                </span>
                             </div>
                          ) : newOrder?.order_status === "on_the_way" ? (
                             <div className="w-44">
                                <span className="bg-blue-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                   On the way
                                </span>
                             </div>
                          ) : (
                             <div className="w-44">
                                <span className="bg-green-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                   Delivery Completed
                                </span>
                             </div>
                          )}
                       </td>
                       <td className="px-6 py-4">
                          {newOrder?.is_read === 1 ? (
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
                          <div className="w-44">
                             {newOrder?.order_status !== "delivered" ? (
                                <button
                                   type="button"
                                   className=" font-medium bg-blue-400 px-3 py-1 rounded-2xl text-white dark:text-blue-500"
                                   onClick={() =>
                                      onChangeOrderStatus(newOrder?.id)
                                   }
                                >
                                   <span>
                                      Change to{" "}
                                      {newOrder?.order_status === "pending"
                                         ? "Processing"
                                         : newOrder?.order_status ===
                                           "processing"
                                         ? "On the way"
                                         : newOrder?.order_status ===
                                              "on_the_way" && "Delivery"}
                                   </span>
                                </button>
                             ) : (
                                <span className=" font-medium bg-blue-400 px-3 py-1 rounded-2xl text-white dark:text-blue-500">
                                   <span className=" capitalize">
                                      {newOrder?.order_status}
                                   </span>
                                </span>
                             )}
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex flex-row items-center gap-1">
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
                          </div>
                       </td>
                    </tr>
                 );
              })
            : null}
         {orders.length > 0 ? (
            orders.map((order, index) => {
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
                     <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                     >
                        #{order?.tran_id}
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
                     <td className="px-6 py-4">{order?.total}</td>
                     <td className="px-6 py-4">
                        <div className="w-28">
                           {formatDate(order?.created_at)}
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="w-28">
                           {formatDate(order?.paid_date)}
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        {order?.order_status === "pending" ? (
                           <div className="w-44">
                              <span className="bg-yellow-300 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                 Pending
                              </span>
                           </div>
                        ) : order?.order_status === "processing" ? (
                           <div className="w-44">
                              <span className="bg-orange-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                 Processing
                              </span>
                           </div>
                        ) : order?.order_status === "on_the_way" ? (
                           <div className="w-44">
                              <span className="bg-blue-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                 On the way
                              </span>
                           </div>
                        ) : (
                           <div className="w-44">
                              <span className="bg-green-400 text-white rounded-full px-3 py-[.2rem] text-sm font-medium">
                                 Delivery Completed
                              </span>
                           </div>
                        )}
                     </td>
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
                        <div className="w-44">
                           {order?.order_status !== "delivered" ? (
                              <button
                                 type="button"
                                 className=" font-medium bg-blue-400 px-3 py-1 rounded-2xl text-white dark:text-blue-500"
                                 onClick={() => onChangeOrderStatus(order?.id)}
                              >
                                 <span>
                                    Change to{" "}
                                    {order?.order_status === "pending"
                                       ? "Processing"
                                       : order?.order_status === "processing"
                                       ? "On the way"
                                       : order?.order_status === "on_the_way" &&
                                         "Delivery"}
                                 </span>
                              </button>
                           ) : (
                              <span className=" font-medium bg-blue-400 px-3 py-1 rounded-2xl text-white dark:text-blue-500">
                                 <span className=" capitalize">
                                    {order?.order_status}
                                 </span>
                              </span>
                           )}
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex flex-row items-center gap-1">
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
                        </div>
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
