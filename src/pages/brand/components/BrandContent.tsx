import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import BrandTableTBody from "./BrandTableTBody";
import useBrandContext from "../context/BrandContext";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import { UpArrowIcon } from "../../components/Icons";
import Column from "../../components/Column";

export default function BrandContent() {
  const {
    getBrands,
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
  } = useBrandContext();

  useEffect(() => {
    getBrands();
  }, []);

  const brands = useSelector((state) => state.brands);

  const filterItems = [
    {
      id: 1,
      name: "active",
    },
    {
      id: 2,
      name: "inactive",
    },
  ];

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    <Column name="#" />,
    <Column name="Brand Name" />,
    <Column name="Slug" />,
    <Column name="Image" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <BrandTableTBody
      brands={brands}
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
        title="Brand lists"
        link="/brand-create"
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
