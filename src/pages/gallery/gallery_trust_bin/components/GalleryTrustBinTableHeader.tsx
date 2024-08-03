import React from "react";
import { Link } from "react-router-dom";
import FilterBtn from "../../components/FilterBtn";
import { useSelector } from "react-redux";

export default function GalleryTrustBinTableHeader({
  sideBar,
  galleryCategoryId,
  itemHandle,
  searchHandler,
  multipleRestoreHandler,
  multipleDeleteHandler,
  tableResetHanlder,
}: any) {
  const galleryCategories = useSelector((state) => state.galleryCategories);

  return (
    <div
      className={`4lg:flex justify-between items-center mb-3 w-full py-2 px-5 shadow-sm bg-gray-50 dark:bg-gray-800 border border-1 border-gray-300/80 rounded-md`}
    >
      <div
        className={`${
          sideBar === true
            ? "2xlMiddle3xl:w-8/12 4lg:w-7/12 w-full"
            : "5lg:w-9/12 4lg:w-8/12 w-full"
        } 5xs:flex 2lg:justify-start justify-center`}
      >
        <div
          className={`${
            sideBar === true
              ? "3xl:w-10/12 4lg:w-9/12 2lg:w-10/12 2md:w-9/12 md:w-8/12 xs:w-9/12 3xs:w-8/12 5xs:w-7/12 w-full"
              : "2md:w-10/12 md:w-9/12 xs:w-9/12 3xs:w-8/12 5xs:w-7/12 w-full"
          } flex 5xs:justify-start justify-center`}
        >
          <FilterBtn
            galleryCategories={galleryCategories}
            itemHandle={itemHandle}
            selectItemId={galleryCategoryId}
          />
          <div className="ml-1 w-full">
            <input
              type="text"
              onChange={searchHandler}
              className=" h-8 w-full rounded-md border border-gray-300/70"
            />
          </div>
        </div>
        <div
          className={`${
            sideBar === true
              ? "3xl:w-2/12 4lg:w-3/12 2lg:w-2/12 2md:w-3/12 md:w-4/12 xs:w-3/12 3xs:w-4/12 5xs:w-5/12  w-full"
              : "2md:w-2/12 md:w-3/12 xs:w-3/12 3xs:w-4/12 5xs:w-5/12  w-full"
          } flex 5xs:justify-end justify-center`}
        >
          <button
            type="button"
            onClick={() => tableResetHanlder()}
            className="px-3 5xs:py-0 py-1 5xs:mt-0 mt-2 text-sm uppercase font-semibold text-gray-700 dark:text-white  bg-white dark:bg-gray-700 border border-gray-200 rounded-md"
          >
            Table Reset
          </button>
        </div>
      </div>
      <div
        className={`${
          sideBar === true
            ? "2xlMiddle3xl:w-4/12 4lg:w-5/12 w-full"
            : "5lg:w-3/12 4lg:w-4/12 w-full"
        } 4xs:flex items-center 4lg:justify-end justify-between 4lg:pt-0 pt-2 `}
      >
        <div className="4xs:block flex justify-center 4xs:mb-0 mb-2">
          <button
            type="button"
            onClick={() => multipleDeleteHandler()}
            className="px-3 h-8 flex items-center text-sm uppercase font-semibold text-white  bg-red-500 border-0 rounded-md me-3"
          >
            Delete ALl
          </button>
        </div>
        <div className="flex 4xs:justify-start justify-center">
          <button
            type="button"
            onClick={() => multipleRestoreHandler()}
            className="px-3 h-8 flex items-center text-sm uppercase font-semibold text-white  bg-yellow-500 border-0 rounded-md me-3"
          >
            Restore ALl
          </button>
          <Link
            to="/gallery"
            className="px-3 h-8 flex items-center text-sm uppercase font-semibold text-gray-700 dark:text-white  bg-white dark:bg-gray-700 border border-gray-200 rounded-md"
          >
            Gallery
          </Link>
          {/* <Button
            gradientDuoTone="purpleToBlue"
            size="xs"
            className=" text-sm uppercase font-semibold flex items-center"
          >
            Create
          </Button> */}
        </div>
      </div>
    </div>
  );
}
