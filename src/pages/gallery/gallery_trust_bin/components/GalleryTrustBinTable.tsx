import React, { Fragment, useEffect } from "react";
import GalleryTrustBinGrid from "./GalleryTrustBinGrid";
import GalleryTrustBinCard from "./GalleryTrustBinCard";
import GalleryTrustBinContext from "../context/gallery-trust-bin/GalleryTrustBinContext";
import { useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";
import SpinnerLoading from "../../components/SpinnerLoading";
import GalleryNotfound from "../../components/GalleryNotfound";

export default function GalleryTrustBinTable({
  sideBar,
  page,
  limit,
  totalPage,
  handlePageClick,
  loading,
  restoreHandler,
  deleteHandler,
  ids,
  handleGalleryCheck,
}: any) {
  const galleries = useSelector((state) => state.galleries);

  return (
    <Fragment>
      <GalleryTrustBinGrid sideBar={sideBar}>
        {galleries.length > 0 ? (
          galleries.map((gallery, index) => (
            <GalleryTrustBinCard
              key={index + 1}
              gallery={gallery}
              restoreHandler={restoreHandler}
              deleteHandler={deleteHandler}
              ids={ids}
              handleGalleryCheck={handleGalleryCheck}
            />
          ))
        ) : loading === true ? (
          <SpinnerLoading
            color="blue-600"
            className={`py-5 ${
              sideBar === true
                ? "7xl:col-span-5 2xlMiddle3xl:col-span-4 2lg:col-span-3 2xs:col-span-2 col-span-1"
                : "7xl:col-span-6 2xlMiddle3xl:col-span-5 2lg:col-span-4 md:col-span-3 2xs:col-span-2 col-span-1"
            } flex justify-center backdrop-blur-sm bg-gray-100/30 rounded-lg w-full shadow-sm border`}
          />
        ) : (
          <GalleryNotfound
            className={`py-5 ${
              sideBar === true
                ? "7xl:col-span-5 2xlMiddle3xl:col-span-4 2lg:col-span-3 2xs:col-span-2 col-span-1"
                : "7xl:col-span-6 2xlMiddle3xl:col-span-5 2lg:col-span-4 md:col-span-3 2xs:col-span-2 col-span-1"
            } flex justify-center backdrop-blur-sm bg-gray-100/30 rounded-lg w-full shadow-sm border`}
          />
        )}
      </GalleryTrustBinGrid>

      {totalPage > 0 && (
        <div className="pt-5 flex justify-between items-center">
          <div className=" text-gray-500">
            Page {page} items {page * limit} total page {totalPage}
          </div>
          <Pagination
            handlePageClick={handlePageClick}
            page={page}
            totalPage={totalPage}
          />
        </div>
      )}
    </Fragment>
  );
}
