import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import CollectionTableTBody from "./CollectionTableTBody";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useCollectionContext from "../context/CollectionContext";

export default function CollectionContent() {
  const {
    getCollections,
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
  } = useCollectionContext();

  useEffect(() => {
    getCollections();
  }, []);

  const collections = useSelector((state) => state.collections);

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

  const theadColumnName = [
    <Column name="#" />,
    <Column name="Collection Name" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <CollectionTableTBody
      collections={collections}
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
        title="Collection lists"
        link="/collection-create"
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
