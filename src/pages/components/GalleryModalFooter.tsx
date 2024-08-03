import React from "react";
import Paginate from "./Paginate";

export default function GalleryModalFooter({
  setOpenGalleryModal,
  modalCloseHandle,
  paginate,
  page,
  totalPage,
  tab,
}: {
  setOpenGalleryModal?: any;
  modalCloseHandle?: any;
  paginate?: any;
  page?: any;
  totalPage?: any;
  tab?: any;
}) {
  return (
    <div
      className={`flex items-center ${
        tab !== "upload file" ? "justify-between" : "justify-end"
      } p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 absolute bottom-0 left-0 w-full`}
    >
      {tab !== "upload file" && (
        <Paginate paginate={paginate} page={page} totalPage={totalPage} />
      )}
      <div>
        {tab !== "upload file" && (
          <button
            type="button"
            onClick={() => setOpenGalleryModal(false)}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-green-400 rounded-lg border border-gray-200 hover:bg-green-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Select File
          </button>
        )}
        <button
          type="button"
          onClick={() => modalCloseHandle()}
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
