import React from "react";

interface Props {
  perPageLimit?: any;
  setRowsPerPage?: any;
  rowsPerPage?: any;
  totalPageLangth?: any;
  setCurrentPage?: any;
  currentPage?: any;
}

export default function PerPageLimit({
  perPageLimit,
  setRowsPerPage,
  rowsPerPage,
  totalPageLangth,
  setCurrentPage,
  currentPage,
}: Props) {
  return (
    <select
      value={rowsPerPage}
      onChange={(e) => {
        let newRowPerPage = e.target.value;
        let newTotalPage = Math.ceil(totalPageLangth / newRowPerPage);

        setCurrentPage(currentPage !== newTotalPage ? 1 : newTotalPage);
        setRowsPerPage(newRowPerPage);
      }}
      className=" rounded-md p-2 px-3 dark:bg-gray-700 dark:text-white border border-gray-100 dark:border-gray-800 drop-shadow-sm"
    >
      {Array(46)
        .fill(0)
        .map((_, n) => (
          <option key={n + perPageLimit} value={n + perPageLimit}>
            {n + perPageLimit}
          </option>
        ))}
    </select>
  );
}
