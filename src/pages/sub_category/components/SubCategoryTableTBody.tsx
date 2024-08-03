import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { PlusIcon, RemoveIcon } from "../../components/Icons";

interface Props {
  sub_categories?: any;
  length?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
  sortBy?: any;
  galleryImage?: any;
  setGalleryImage?: any;
  setGalleryId?: any;
  removeFile?: any;
  openGalleryModalHandler?: any;
  banner_url?: any;
  addBanner?: any;
  removeBanner?: any;
}

export default function SubCategoryTableTBody({
  sub_categories,
  length,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
  sortBy,
  galleryImage,
  setGalleryImage,
  setGalleryId,
  removeFile,
  openGalleryModalHandler,
  banner_url,
  addBanner,
  removeBanner,
}: Props) {
  return (
    <tbody>
      {sub_categories.length > 0 ? (
        sub_categories.map((sub_category, index) => (
          <tr
            key={
              sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : length - index - (page - 1) * limit
            }
            // {length - index - (page - 1) * limit}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
          >
            <td className="px-6 py-4">
              {sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : length - index - (page - 1) * limit}
              {/* {length - index - (page - 1) * limit} */}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {sub_category.name}
            </td>
            <td className="px-6 py-4">{sub_category.slug}</td>
            <td className="px-6 py-4">
              <div className="h-20 w-20 mx-auto">
                <img
                  src={sub_category.image_url}
                  className="h-full w-full border rounded-2xl shadow-sm"
                  alt={sub_category.name}
                />
              </div>
            </td>
            <td className="px-6 py-4">
              {sub_category.banner_url ? (
                <div className=" relative h-20 w-20 rounded-3xl mx-auto">
                  <img
                    src={sub_category.banner_url}
                    className="h-full w-full border rounded-3xl shadow-sm mx-auto"
                    alt={sub_category.name}
                  />
                  <button
                    type="button"
                    className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all absolute top-0 end-0 rounded-full"
                    onClick={() =>
                      removeBanner(
                        sub_category.id,
                        setGalleryImage,
                        setGalleryId
                      )
                    }
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="hidden"
                    ref={banner_url}
                    value={galleryImage.url}
                  />
                </div>
              ) : (
                <Fragment>
                  {galleryImage.url && galleryImage.imageType === "banner" ? (
                    <Fragment>
                      <div className=" relative h-20 w-20 rounded-3xl mx-auto">
                        <img
                          src={galleryImage.url}
                          className="h-full w-full border rounded-3xl shadow-sm mx-auto"
                          alt={sub_category.name}
                        />
                        <button
                          type="button"
                          className="text-red-500 absolute top-0 end-0 border border-red-500 rounded-full"
                          onClick={() => removeFile()}
                        >
                          <RemoveIcon />
                        </button>
                        <input
                          type="hidden"
                          ref={banner_url}
                          value={galleryImage.url}
                        />
                      </div>
                      <button
                        type="button"
                        className=" uppercase text-sm bg-blue-500 text-white px-3 py-1 mt-1 rounded-3xl"
                        onClick={() =>
                          addBanner(
                            sub_category.id,
                            setGalleryImage,
                            setGalleryId
                          )
                        }
                      >
                        add
                      </button>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <button
                        type="button"
                        className=" bg-blue-500 rounded-lg p-1"
                        onClick={() => openGalleryModalHandler("banner")}
                      >
                        <PlusIcon className="text-white" />
                      </button>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </td>
            <td className="px-6 py-4">
              {sub_category.status === "active" ? (
                <small
                  onClick={() => statusHandle(sub_category.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(sub_category.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  InActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/sub-category-edit/${sub_category.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(sub_category.id)}
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
