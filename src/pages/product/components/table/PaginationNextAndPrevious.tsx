import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  currentPage?: any;
  setCurrentPage?: any;
  totalPages?: any;
}

export default function PaginationNextAndPrevious({
  currentPage,
  setCurrentPage,
  totalPages,
}: Props) {
  return (
    <div className="pagination flex gap-1">
      <button
        type="button"
        className={`bg-slate-200 dark:bg-gray-700 rounded-md p-1 text-lg ${
          currentPage === 1
            ? "text-gray-400 dark:text-gray-500"
            : "dark:text-white"
        }`}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        type="button"
        className={`bg-slate-200 dark:bg-gray-700 rounded-md p-1 text-lg ${
          currentPage === totalPages
            ? "text-gray-400 dark:text-gray-500"
            : "dark:text-white"
        }`}
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}
