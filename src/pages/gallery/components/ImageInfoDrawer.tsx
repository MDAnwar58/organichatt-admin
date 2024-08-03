import React from "react";
import { Drawer } from "flowbite-react";
import { RegImage } from "../../components/Icons";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import axiosClient from "../../../axios-client";

export default function ImageInfoDrawer({
  isOpen,
  setIsOpen,
  galleryCategories,
  image_name,
  gallery_category_id,
  updateHandler,
  form,
}: {
  isOpen?: any;
  setIsOpen?: any;
  galleryCategories?: any;
  image_name?: any;
  gallery_category_id?: any;
  updateHandler?: any;
  form?: any;
}) {
  const handleClose = () => {
    form.current.reset();
    setIsOpen(false);
  };
  const gallery = useSelector((state) => state.gallery);

  const imageDownload = async (id, image) => {
    const response = await axiosClient.get(`/gallery-image-download/${id}`, {
      responseType: "blob",
    });
    // Create a blob URL for the image
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", image);
    document.body.appendChild(link);
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
    }, 500);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="z-50"
        position="right"
        backdrop={true}
      >
        <Drawer.Header titleIcon={RegImage} title="Gallery Image Information" />
        <Drawer.Items>
          <form ref={form}>
            <div className="pb-3">
              {/* <label htmlFor="file_name">File Name</label>
              <input
                type="text"
                className="w-full rounded-lg mt-1"
                defaultValue={gallery.image_name}
              /> */}
              <Input
                label="File Name"
                labelHtmlFor="file_name"
                type="text"
                className="w-full rounded-lg mt-1"
                Value={gallery.image_name}
                inputRef={image_name}
              />
            </div>
            <div className="pb-3">
              <Select
                label="Gallery Category"
                labelHtmlFor="gallery_category_id"
                selectedValue={gallery.gallery_category_id}
                inputRef={gallery_category_id}
                className="w-full rounded-lg mt-1"
              >
                {galleryCategories.length > 0 &&
                  galleryCategories.map((galleryCategory, index) => (
                    <option key={index + 1} value={galleryCategory.id}>
                      {galleryCategory.name}
                    </option>
                  ))}
              </Select>
              {/* <label htmlFor="file_name">Gallery Category</label>
              <select
                className="w-full rounded-lg mt-1"
                value={gallery.gallery_category_id}
              >
                {galleryCategories.length > 0 &&
                  galleryCategories.map((galleryCategory, index) => (
                    <option key={index + 1} value={galleryCategory.id}>
                      {galleryCategory.name}
                    </option>
                  ))}
              </select> */}
            </div>
            <div className="pb-3">
              <Input
                label="File Type"
                labelHtmlFor="file_type"
                type="text"
                className="w-full rounded-lg mt-1"
                Value={gallery.file_type}
                disabled={true}
              />
            </div>
            <div className="pb-3">
              <Input
                label="File Size"
                labelHtmlFor="file_size"
                type="text"
                className="w-full rounded-lg mt-1"
                Value={gallery.image_size}
                disabled={true}
              />
            </div>
            <div className="pb-3">
              <label htmlFor="file_extension">File Extension</label>
              <Input
                label="File Extension"
                labelHtmlFor="file_extension"
                type="text"
                className="w-full rounded-lg mt-1"
                Value={gallery.image_extention}
                disabled={true}
              />
            </div>
            <p className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <Button
                type="button"
                onClick={() => updateHandler(gallery.id)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Update
              </Button>
              <Button
                type="button"
                onClick={() =>
                  imageDownload(
                    gallery.id,
                    `${gallery.image_name}.${gallery.image_extention}`
                  )
                }
                className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Download&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Button>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
