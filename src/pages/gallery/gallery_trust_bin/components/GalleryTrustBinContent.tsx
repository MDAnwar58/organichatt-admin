import React, { Fragment, useEffect } from "react";
import GalleryTrustBinTableHeader from "./GalleryTrustBinTableHeader";
import GalleryTrustBinTable from "./GalleryTrustBinTable";
import GalleryTrustBinContext from "../context/GalleryTrustBinContext";

export default function GalleryTrustBinContent({ sideBar }) {
  const {
    getGalleryCategories,
    getGalleries,
    page,
    limit,
    totalPage,
    handlePageClick,
    galleryCategoryId,
    itemHandle,
    searchHandler,
    loading,
    restoreHandler,
    deleteHandler,
    multipleRestoreHandler,
    ids,
    handleGalleryCheck,
    multipleDeleteHandler,
    tableResetHanlder,
  } = GalleryTrustBinContext();
  useEffect(() => {
    getGalleryCategories();
    getGalleries();
    console.clear();
  }, []);
  return (
    <Fragment>
      <GalleryTrustBinTableHeader
        sideBar={sideBar}
        galleryCategoryId={galleryCategoryId}
        itemHandle={itemHandle}
        searchHandler={searchHandler}
        multipleRestoreHandler={multipleRestoreHandler}
        multipleDeleteHandler={multipleDeleteHandler}
        tableResetHanlder={tableResetHanlder}
      />
      <GalleryTrustBinTable
        sideBar={sideBar}
        page={page}
        limit={limit}
        totalPage={totalPage}
        handlePageClick={handlePageClick}
        loading={loading}
        restoreHandler={restoreHandler}
        deleteHandler={deleteHandler}
        ids={ids}
        handleGalleryCheck={handleGalleryCheck}
      />
    </Fragment>
  );
}
