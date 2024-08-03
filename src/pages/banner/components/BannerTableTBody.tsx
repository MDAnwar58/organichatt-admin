import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { UpArrowIcon } from "../../components/Icons";

export default function BannerTableTBody({
  banners,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
}: {
  banners?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
}) {
  return (
    <tbody>
      {banners.length > 0 ? (
        banners.map((banner, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4"> {index + 1 + (page - 1) * limit}</td>
            <td className="px-6 py-4">
              <div className="h-20 w-20 mx-auto">
                <img
                  src={banner.image_url}
                  className="h-full w-full border rounded-2xl shadow-sm"
                  alt="banner image"
                />
              </div>
            </td>
            <td className="px-6 py-4">
              {banner.status === "active" ? (
                <small
                  onClick={() => statusHandle(banner.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(banner.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  InActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/banner-edit/${banner.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(banner.id)}
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
