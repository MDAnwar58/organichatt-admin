import React, { Fragment, useEffect } from "react";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import OrdersTableTBody from "./OrdersTableTBody";
import useOrdersContext from "../context/OrdersContext";
import { io } from "socket.io-client";

export default function OrdersContent() {
   const {
      getOffers,
      page,
      limit,
      totalPage,
      onPageHabdle,
      pageItemLimitHandler,
      selectItemId,
      itemHandle,
      loading,
      searchHandle,
      onChangeOrderStatus,
      deleteHandle,
   } = useOrdersContext();
   const localhost = import.meta.env.VITE_API_SOCKET_IO;

   useEffect(() => {
      const socket = io(localhost);
      getOffers();
      socket.emit("orderPlaced", "");
   }, []);

   const orders = useSelector((state: any) => state.orders);

   const filterItems = [
      {
         id: 1,
         name: "pending",
      },
      {
         id: 2,
         name: "processing",
      },
      {
         id: 3,
         name: "on_the_way",
      },
      {
         id: 4,
         name: "delivered",
      },
      {
         id: 5,
         name: "Read",
      },
      {
         id: 6,
         name: "Un Read",
      },
   ];

   const theadColumnName = [
      <Column name="#" />,
      <Column name="Transiction Id" />,
      <Column name="User Name" />,
      <Column name="Purchase Amount" />,
      <Column name="Order Issue Date" />,
      <Column name="Order Paid" />,
      <Column name="Status" />,
      <Column name="Is Read" />,
      <Column name="Change Order Status" />,
      <Column name="Action" />,
   ];

   const tbody = (
      <OrdersTableTBody
         orders={orders}
         loading={loading}
         onChangeOrderStatus={onChangeOrderStatus}
         deleteHandle={deleteHandle}
         page={page}
         limit={limit}
         getOffers={getOffers}
      />
   );
   const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

   return (
      <Fragment>
         <h1 className=" mb-2 text-xl font-mono font-semibold text-gray-500 dark:text-white/90">
            Order List
         </h1>

         <DataTable
            theadColumnName={theadColumnName}
            tbody={tbody}
            page={page}
            limit={limit}
            totalPage={totalPage}
            onPageHabdle={onPageHabdle}
            limitSelection={limitSelection}
            search={true}
            filter={true}
            filterItems={filterItems}
            selectItemId={selectItemId}
            itemHandle={itemHandle}
            onChangeSearch={searchHandle}
         />
      </Fragment>
   );
}
