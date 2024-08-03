import React from "react";
import { Modal, TextInput } from "flowbite-react";

export function GalleryCategoryCreateModal({
  openModal,
  setOpenModal,
  galleryCategoryNameInputRef,
  galleryCategoryForm,
  handleSave,
  nameErrorHandler,
  errors,
}) {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={galleryCategoryNameInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <form ref={galleryCategoryForm} className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Gallery Category Added
            </h3>
            <div>
              <TextInput
                id="text"
                ref={galleryCategoryNameInputRef}
                onChange={nameErrorHandler}
                placeholder="Gallery category name..."
                color="primary"
              />
              {errors.name && (
                <small className=" text-red-500">{errors.name}</small>
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
