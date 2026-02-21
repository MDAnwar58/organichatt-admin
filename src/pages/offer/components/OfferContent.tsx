import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import { UpArrowIcon } from "../../components/Icons";
import Column from "../../components/Column";
import OfferTableTBody from "./OfferTableTBody";
import useOfferContext from "../context/OfferContext";

export default function OfferContent() {
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
      statusHandle,
      deleteHandle,
   } = useOfferContext();

   useEffect(() => {
      getOffers();
   }, []);

   const offers = useSelector((state: any) => state.offers);

   const filterItems = [
      {
         id: 1,
         name: "Active",
      },
      {
         id: 2,
         name: "Deactive",
      },
   ];

   const theadColumnName = [
      <Column name="#" />,
      <Column name="Offer Name" />,
      <Column name="Percents" />,
      <Column name="Brand" />,
      <Column name="Category" />,
      <Column name="Sub Category" />,
      <Column name="Product" />,
      <Column name="Image" />,
      <Column name="Starting Date" />,
      <Column name="Ending Date" />,
      <Column name="Status" />,
      <Column name="Action" />,
   ];

   const tbody = (
      <OfferTableTBody
         offers={offers}
         loading={loading}
         statusHandle={statusHandle}
         deleteHandle={deleteHandle}
         page={page}
         limit={limit}
      />
   );
   const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

   return (
      <Fragment>
         <TableHeader
            title="Offer lists"
            link="/offer-create"
            linkName="Create"
            linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
         />

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
