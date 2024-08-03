import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";

export default function SizeNumberTableTBody({
  size_numbers,
  loading,
  deleteHandle,
  page,
  limit,
}: {
  size_numbers?: any;
  loading?: boolean;
  deleteHandle?: any;
  page?: any;
  limit?: any;
}) {
  return (
    <tbody>
      {size_numbers.length > 0 ? (
        size_numbers.map((size_number, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{index + 1 + (page - 1) * limit}</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {size_number.name}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/size-number-edit/${size_number.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(size_number.id)}
                className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : loading === true ? (
        <Loading colSpan={6} height={20} />
      ) : (
        <DataNotFound colSpan={6} />
      )}
    </tbody>
  );
}
