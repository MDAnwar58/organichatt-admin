import React from "react";

export default function Paginate({
  paginate,
  page,
  totalPage,
}: {
  paginate?: any;
  page?: any;
  totalPage?: any;
}) {
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => paginate("previews", page - 1)}
        disabled={page === 1 && true}
        className={`py-2.5 px-5 ms-3 text-md font-medium text-white focus:outline-none ${
          page > 1 ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-300"
        } rounded-lg  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
      >
        Previews
      </button>
      <button
        type="button"
        disabled={page === totalPage && true}
        onClick={() => paginate("next", page + 1)}
        className={`py-2.5 px-5 ms-3 text-md font-medium text-white focus:outline-none rounded-lg ${
          page !== totalPage ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-300"
        } focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
      >
        Next
      </button>
    </div>
  );
}
