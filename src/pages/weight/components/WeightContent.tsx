import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import SizeNumberTableTBody from "./WeightTableTBody";
import useSizeNumberContext from "../context/SizeNumberContext";
import useWeightContext from "../context/SizeNumberContext";

export default function WeightContent() {
  const {
    getWeights,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    loading,
    searchHandle,
    deleteHandle,
  } = useWeightContext();

  useEffect(() => {
    getWeights();
  }, []);

  const weights = useSelector((state) => state.weights);

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Weight" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <SizeNumberTableTBody
      weights={weights}
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
        title="Weight lists"
        link="/weight-create"
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
