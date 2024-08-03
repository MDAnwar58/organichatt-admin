import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";

export default function ColorTableTBody({
  colors,
  loading,
  deleteHandle,
  page,
  limit,
}: {
  colors?: any;
  length?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
}) {
  return (
    <tbody>
      {colors.length > 0 ? (
        colors.map((color, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{index + 1 + (page - 1) * limit}</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {color.name}
            </td>
            <td className="px-6 py-4">{color.color_code}</td>
            <td className="px-6 py-4">
              <Link
                to={`/color-edit/${color.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(color.id)}
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
