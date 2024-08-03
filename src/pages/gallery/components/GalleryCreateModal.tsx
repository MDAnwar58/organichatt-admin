import React, { useState } from "react";
import { Modal, TextInput } from "flowbite-react";
import FileInput from "../../components/FileInput";
import { useSelector } from "react-redux";

export default function GalleryCreateModal({
  openModal,
  setOpenModal,
  galleryCategories,
  image_name,
  gallery_category_id,
  image,
  form,
  handleSave,
  imagePreviewUrl,
  imageHandle,
  removeImage,
  imageNameError,
  setImageNameError,
  imageError,
}) {
  const errors = useSelector((state) => state.errors);
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form ref={form} className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Gallery Category Added
            </h3>
            <div>
              <input
                type="text"
                ref={image_name}
                onChange={() => setImageNameError(false)}
                placeholder="Gallery category name..."
                className=" border border-gray-700 w-full p-2 rounded-lg px-3 focus:border-transparent focus:ring-blue-500"
              />
              {errors.image_name && imageNameError === true && (
                <small className=" text-red-500">{errors.image_name}</small>
              )}
            </div>
            <div>
              <select ref={gallery_category_id} className=" w-full rounded-lg">
                {galleryCategories.length > 0 ? (
                  galleryCategories.map((galleryCategory, index) => (
                    <option key={index} value={galleryCategory.id}>
                      {galleryCategory.name}
                    </option>
                  ))
                ) : (
                  <option>Gallery category not found</option>
                )}
              </select>
              {errors.gallery_category_id && (
                <small className=" text-red-500">
                  {errors.gallery_category_id}
                </small>
              )}
            </div>
            <div>
              <FileInput
                inputRef={image}
                inputText="SVG, PNG, JPG or GIF (MAX. 800x400px)"
                height="h-40"
                imagePreviewUrl={imagePreviewUrl}
                imageHandle={imageHandle}
                removeImage={removeImage}
              />
              {errors.image && imageError === true && (
                <small className=" text-red-500">{errors.image}</small>
              )}
            </div>
            <div className="w-full text-end">
              <button
                type="button"
                onClick={() => handleSave()}
                className="px-5 py-2 bg-blue-500 rounded-md text-white"
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
