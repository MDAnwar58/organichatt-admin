import React, { Fragment, useState } from "react";
import { PlusIcon, RemoveIcon } from "../../../components/Icons";
import { useSelector } from "react-redux";

interface Props {
  productImagesModalOpen?: any;
  setProductImagesModalOpen?: any;
  setOpenGalleryModal?: any;
  galleryImages?: any;
  galleryImageRemoveHandle?: any;
  multipleImageAdded?: any;
  setGalleryImages?: any;
  removeProductImage?: any;
}

export default function ProductImagesModal({
  productImagesModalOpen,
  setProductImagesModalOpen,
  setOpenGalleryModal,
  galleryImages,
  galleryImageRemoveHandle,
  multipleImageAdded,
  setGalleryImages,
  removeProductImage,
}: Props) {
  const product_images = useSelector((state) => state.product_images);

  return (
    <Fragment>
      <div
        className={`${
          productImagesModalOpen === false && "hidden"
        } fixed top-0 right-0 left-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center md:w-full max-w-full md:inset-0 md:h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 md:max-w-md max-w-full md:max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className=" sticky top-0 right-0 left-0 bg-white flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 z-30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Information
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setProductImagesModalOpen(false);
                  setGalleryImages([]);
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center h-32 border-dashed border-2 border-gray-500 rounded-lg"
                  onClick={() => setOpenGalleryModal(true)}
                >
                  <PlusIcon />
                </button>
                {galleryImages.length > 0 &&
                  galleryImages.map((image) => (
                    <div key={image.galleryId} className=" relative">
                      <img
                        src={image.url}
                        alt="..."
                        className=" rounded-lg h-32 w-full"
                      />
                      <button
                        type="button"
                        className="border border-red-500 text-red-500 hover:text-white hover:bg-red-500 p-1 rounded-lg absolute top-1 right-1"
                        onClick={() =>
                          galleryImageRemoveHandle(image.galleryId)
                        }
                      >
                        <RemoveIcon />
                      </button>
                    </div>
                  ))}
                {product_images.length > 0 &&
                  product_images.map((image) => (
                    <div key={image.id} className=" relative">
                      <img
                        src={image.image_url}
                        alt="..."
                        className=" rounded-lg h-32 w-full"
                      />
                      <button
                        type="button"
                        className="border border-red-500 text-red-500 hover:text-white hover:bg-red-500 p-1 rounded-lg absolute top-1 right-1"
                        onClick={() =>
                          removeProductImage(image.id, image.product_id)
                        }
                      >
                        <RemoveIcon />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            {/* Modal footer */}
            <div className=" z-30 sticky bottom-0 right-0 left-0 bg-white flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-300/90 rounded-lg border border-gray-200 hover:bg-red-500/70 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  setProductImagesModalOpen(false);
                  setGalleryImages([]);
                }}
              >
                Close
              </button>
              {galleryImages.length > 0 && (
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-blue-500/70 rounded-lg border border-gray-200 hover:bg-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>
                    multipleImageAdded(
                      galleryImages,
                      setGalleryImages,
                      setProductImagesModalOpen
                    )
                  }
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {productImagesModalOpen === true && (
        <div
          className="bg-gray-900/30 dark:bg-gray-900/60 fixed inset-0 z-30"
          onClick={() => {
            setProductImagesModalOpen(false);
          }}
        />
      )}
    </Fragment>
  );
}
