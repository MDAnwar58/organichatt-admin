import React from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";

interface Props {
  banner?: any;
  openGalleryModalHandler?: any;
  galleryImage?: any;
  removeFile?: any;
  image_url?: any;
  form?: any;
  updateBrand?: any;
  errors?: any;
}

export default function BannerEditForm({
  banner,
  openGalleryModalHandler,
  galleryImage,
  removeFile,
  image_url,
  form,
  updateBrand,
  errors,
}: Props) {
  return (
    <Form formRef={form} className={"pt-3 p-5"}>
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
          onClick={() => updateBrand(banner.id)}
          className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          update
        </button>
      </div>
    </Form>
  );
}
