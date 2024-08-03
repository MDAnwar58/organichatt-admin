import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import ColorTableTBody from "./SizeTableTBody";
import useSizeContext from "../context/SizeContext";

export default function SizeContent() {
  const {
    getColors,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    loading,
    searchHandle,
    deleteHandle,
  } = useSizeContext();

  useEffect(() => {
    getColors();
  }, []);

  const sizes = useSelector((state) => state.sizes);

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Size" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <ColorTableTBody
      sizes={sizes}
      loading={loading}
      deleteHandle={deleteHandle}
      page={page}
      limit={limit}
    />
  );
  const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

  return (
    <Fragment>
      <TableHeader
        title="Size lists"
        link="/size-create"
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
        onChangeSearch={searchHandle}
      />
    </Fragment>
  );
}
