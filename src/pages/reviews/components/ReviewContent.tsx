import React, { Fragment, useEffect } from "react";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import ReviewsTableTBody from "./ReviewsTableTBody";
import useReviewContext from "../context/ReviewContext";

export default function ReviewContent() {
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
   } = useReviewContext();

   useEffect(() => {
      getOffers();
   }, []);

   const reviews = useSelector((state: any) => state.reviews);

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
      <Column name="User Name" />,
      <Column name="Product" />,
      <Column name="Rating" />,
      <Column name="Content" />,
      <Column name="Is Read" />,
      <Column name="Status" />,
      <Column name="Action" />,
   ];

   const tbody = (
      <ReviewsTableTBody
         reviews={reviews}
         loading={loading}
         onChangeOrderStatus={onChangeOrderStatus}
         deleteHandle={deleteHandle}
         page={page}
         limit={limit}
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
