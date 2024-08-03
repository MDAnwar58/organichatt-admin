import React from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";

export default function EnForm({
  category,
  openGalleryModalHandler,
  galleryImage,
  setGalleryImage,
  removeFile,
  name,
  image_url,
  form,
  updateBrand,
  errors,
}: {
  category?: any;
  openGalleryModalHandler?: any;
  galleryImage?: any;
  setGalleryImage?: any;
  removeFile?: any;
  name?: any;
  image_url?: any;
  form?: any;
  updateBrand?: any;
  errors?: any;
}) {
  return (
    <Form formRef={form} className={"pt-3 p-5"}>
      <div className="mb-5">
        <Input
          type="text"
          className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brand name"
          Value={category.name}
          inputRef={name}
          error={errors.name}
        />
      </div>

      <div className="mb-3">
        <ImageInputFile
          title=" and choose file"
          format="PNG, JPG or GIF"
          maxSize="20MB"
          galleryImage={galleryImage}
          inputValue={galleryImage.url}
          onClick={() => openGalleryModalHandler("image")}
          imgClassName="h-40 rounded-lg"
          removeFile={removeFile}
          inputRef={image_url}
        />

        {errors.image_url && (
          <small className=" text-red-500 px-3">{errors.image_url}</small>
        )}
      </div>

      <div className=" text-end">
        <button
          type="button"
          onClick={() => updateBrand(category.id, setGalleryImage)}
          className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          update
        </button>
      </div>
    </Form>
  );
}
