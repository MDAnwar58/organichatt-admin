import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, page, totalPage }: any) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      forcePage={page - 1}
      pageCount={totalPage}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="flex justify-end"
      pageLinkClassName="border border-gray-300 dark:border-gray-700 text-gray-400 px-2 py-1 mx-[.20rem] rounded-md shadow-sm"
      activeLinkClassName="border border-blue-500 dark:border-gray-900 text-white bg-blue-500 rounded-md shadow-sm"
      previousLinkClassName="border border-gray-300 dark:border-gray-700 text-gray-400 px-2 py-1 rounded-md shadow-sm"
      nextLinkClassName="border border-gray-300 dark:border-gray-700 text-gray-400 px-2 py-1 rounded-md shadow-sm"
      disabledLinkClassName="border-1 border-gray-100 dark:border-gray-700/70 text-gray-500/30 px-2 py-1"
      breakLinkClassName="text-gray-500 px-2 py-1"
    />
  );
}
