import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { PlusIcon, RemoveIcon } from "../../components/Icons";

interface Props {
  categories?: any;
  length?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
  galleryImage?: any;
  setGalleryImage?: any;
  removeFile?: any;
  icon_image_url?: any;
  banner_url?: any;
  addBanner?: any;
  removeBanner?: any;
  removeIcon?: any;
  addIcon?: any;
  setGalleryId?: any;
  openGalleryModalHandler?: any;
}

export default function CategoryTableTBody({
  categories,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
  galleryImage,
  setGalleryImage,
  removeFile,
  icon_image_url,
  banner_url,
  addBanner,
  removeBanner,
  addIcon,
  removeIcon,
  setGalleryId,
  openGalleryModalHandler,
}: Props) {
  return (
    <tbody>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            // {length - index - (page - 1) * limit}
            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">
              {index + 1 + (page - 1) * limit}
              {/* {length - index - (page - 1) * limit} */}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {category.name}
            </td>
            <td className="px-6 py-4">{category.slug}</td>
            <td className="px-6 py-4">
              {category.icon_image_url ? (
                <div className=" relative h-16 w-16 mx-auto">
                  <img
                    src={category.icon_image_url}
                    className="h-full w-full border rounded-full shadow-sm mx-auto"
                    alt={category.name}
                  />
                  <button
                    type="button"
                    className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all absolute top-0 end-0 rounded-full"
                    onClick={() =>
                      removeIcon(category.id, setGalleryImage, setGalleryId)
                    }
                  >
                    <RemoveIcon />
                  </button>
                </div>
              ) : (
                <Fragment>
                  {galleryImage.url &&
                  galleryImage.imageType === "icon_image" ? (
                    <Fragment>
                      <div className=" relative h-16 w-16 mx-auto">
                        <img
                          src={galleryImage.url}
                          className="h-full w-full border rounded-full shadow-sm mx-auto"
                          alt={category.name}
                        />
                        <button
                          type="button"
                          className="text-red-500  border border-red-500 hover:bg-red-500 hover:text-white transition-all absolute top-0 end-0 rounded-full"
                          onClick={() => removeFile()}
                        >
                          <RemoveIcon />
                        </button>
                        <input
                          type="hidden"
                          ref={icon_image_url}
                          value={galleryImage.url}
                        />
                      </div>
                      <button
                        type="button"
                        className=" uppercase text-sm bg-blue-500 text-white px-3 py-1 mt-1 rounded-3xl"
                        onClick={() =>
                          addIcon(category.id, setGalleryImage, setGalleryId)
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
                        onClick={() => openGalleryModalHandler("icon_image")}
                      >
                        <PlusIcon className="text-white" />
                      </button>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </td>
            <td className="px-6 py-4">
              <div className="h-20 w-20">
                <img
                  src={category.image_url}
                  className="h-full w-full border rounded-2xl shadow-sm mx-auto"
                  alt={category.name}
                />
              </div>
            </td>
            <td className="px-6 py-4">
              {category.banner_url ? (
                <div className=" relative h-20 w-20 rounded-3xl mx-auto">
                  <img
                    src={category.banner_url}
                    className="h-full w-full border rounded-3xl shadow-sm mx-auto"
                    alt={category.name}
                  />
                  <button
                    type="button"
                    className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all absolute top-0 end-0 rounded-full"
                    onClick={() =>
                      removeBanner(category.id, setGalleryImage, setGalleryId)
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
                  {galleryImage && galleryImage.imageType === "banner" ? (
                    <Fragment>
                      <div className=" relative h-20 w-20 rounded-3xl mx-auto">
                        <img
                          src={galleryImage.url}
                          className="h-full w-full border rounded-3xl shadow-sm mx-auto"
                          alt={category.name}
                        />
                        <button
                          type="button"
                          className="text-red-500 border border-red-500  hover:bg-red-500 hover:text-white transition-all absolute top-0 end-0 rounded-full"
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
                          addBanner(category.id, setGalleryImage, setGalleryId)
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
              {category.status === "active" ? (
                <small
                  onClick={() => statusHandle(category.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(category.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  InActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/category-edit/${category.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(category.id)}
                className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : loading === true ? (
        <Loading colSpan={8} height={20} />
      ) : (
        <DataNotFound colSpan={8} />
      )}
    </tbody>
  );
}
