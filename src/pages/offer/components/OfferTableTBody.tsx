import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { UpArrowIcon } from "../../components/Icons";
import { format } from "date-fns";
import DifferenceInDays from "../../components/DifferenceInDays";

export default function OfferTableTBody({
  offers,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
}: {
  offers?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
}) {
  return (
    <tbody>
      {offers.length > 0 ? (
        offers.map((offer, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4"> {index + 1 + (page - 1) * limit}</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {offer.name}
            </td>
            <td className="px-6 py-4">{offer.percents}</td>
            <td className="px-6 py-4">
              {offer.brand !== null ? offer.brand.name : "---"}
            </td>
            <td className="px-6 py-4">
              {offer.category !== null ? offer.category.name : "---"}
            </td>
            <td className="px-6 py-4">
              {offer.sub_category !== null ? offer.sub_category.name : "---"}
            </td>
            <td className="px-6 py-4">
              {offer.product !== null ? offer.product.name : "---"}
            </td>
            <td className="px-6 py-4">
              <div className="h-20 w-20 mx-auto">
                <img
                  src={offer.image_url}
                  className="h-full w-full border rounded-2xl shadow-sm"
                  alt="banner image"
                />
              </div>
            </td>

            <td className="px-6 py-4">
              {offer.start_date &&
                format(new Date(offer.start_date), "dd, MMMM yyyy")}
            </td>
            <td className="px-6 py-4">
              {offer.end_date &&
                format(new Date(offer.end_date), "dd, MMMM yyyy")}
            </td>
            <td className="px-6 py-4">
              {offer.status === "active" ? (
                <small
                  onClick={() => statusHandle(offer.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(offer.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  DeActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/offer-edit/${offer.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(offer.id)}
                className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : loading === true ? (
        <Loading colSpan={10} height={20} />
      ) : (
        <DataNotFound colSpan={10} />
      )}
    </tbody>
  );
}
