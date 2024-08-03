import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useColorContext from "../context/ColorContext";
import ColorTableTBody from "./ColorTableTBody";

export default function ColorContent() {
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
  } = useColorContext();

  useEffect(() => {
    getColors();
  }, []);

  const colors = useSelector((state) => state.colors);

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Color Name" />,
    <Column name="Color Code" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <ColorTableTBody
      colors={colors}
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
        title="Color lists"
        link="/color-create"
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
