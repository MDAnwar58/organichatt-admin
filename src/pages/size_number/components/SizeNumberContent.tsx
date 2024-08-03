import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import SizeNumberTableTBody from "./SizeNumberTableTBody";
import useSizeNumberContext from "../context/SizeNumberContext";

export default function SizeNumberContent() {
  const {
    getSizeNumbers,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    loading,
    searchHandle,
    deleteHandle,
  } = useSizeNumberContext();

  useEffect(() => {
    getSizeNumbers();
  }, []);

  const size_numbers = useSelector((state) => state.size_numbers);

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Size Number" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <SizeNumberTableTBody
      size_numbers={size_numbers}
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
        title="Size Number lists"
        link="/size-number-create"
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
