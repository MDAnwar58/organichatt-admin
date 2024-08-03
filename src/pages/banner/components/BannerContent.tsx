import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useBannerContext from "../context/BannerContext";
import BannerTableTBody from "./BannerTableTBody";
import BannerDataTable from "./BannerDataTable";

export default function BannerContent() {
  const {
    getBanners,
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
  } = useBannerContext();

  useEffect(() => {
    getBanners();
  }, []);

  const banners = useSelector((state) => state.banners);

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
    <Column name="Image" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <BannerTableTBody
      banners={banners}
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
        title="Banner lists"
        link="/banner-create"
        linkName="Create"
        linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
      />

      <BannerDataTable
        theadColumnName={theadColumnName}
        tbody={tbody}
        page={page}
        limit={limit}
        totalPage={totalPage}
        onPageHabdle={onPageHabdle}
        limitSelection={limitSelection}
      />
    </Fragment>
  );
}
