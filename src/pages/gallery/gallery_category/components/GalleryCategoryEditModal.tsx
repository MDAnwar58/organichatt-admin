import React, { Fragment } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export function GalleryCategoryEditModal({
  openEditModal,
  colseEditModal,
  galleryCategoryNameEditInputRef,
  galleryCategory,
  galleryCategoryUpdateForm,
  updateSumitHandle,
  errors,
  nameErrorHandler,
}) {
  return (
    <Fragment>
      <Modal
        show={openEditModal}
        size="md"
        popup
        onClose={() => colseEditModal()}
        initialFocus={galleryCategoryNameEditInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <form ref={galleryCategoryUpdateForm} className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Gallery Category Update
            </h3>
            <div>
              <TextInput
                id="text"
                ref={galleryCategoryNameEditInputRef}
                onChange={nameErrorHandler}
                placeholder="Gallery category name..."
                color="primary"
                defaultValue={galleryCategory.name}
              />
              {errors.name && (
                <small className=" text-red-500">{errors.name}</small>
              )}
            </div>
            <div className="w-full text-end">
              <button
                type="button"
                onClick={() => updateSumitHandle(galleryCategory.id)}
                className="px-5 py-2 bg-blue-500 rounded-md text-white"
              >
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
