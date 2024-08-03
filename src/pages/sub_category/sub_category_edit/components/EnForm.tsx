import React, { useState } from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";
import Select from "../../../components/Select";

interface Props {
  categories?: any;
  sub_category?: any;
  openGalleryModalHandler?: any;
  galleryImage?: any;
  removeFile?: any;
  name?: any;
  category_id?: any;
  image_url?: any;
  form?: any;
  updateSubCategory?: any;
  errors?: any;
  disabled?: any;
  setDisabled?: any;
}

export default function EnForm({
  categories,
  sub_category,
  openGalleryModalHandler,
  galleryImage,
  removeFile,
  name,
  category_id,
  image_url,
  form,
  updateSubCategory,
  errors,
  disabled,
  setDisabled,
}: Props) {
  return (
    <Form formRef={form} className={"pt-3 p-5"}>
      <div className="mb-2">
        <Input
          type="text"
          className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brand name"
          Value={sub_category.name}
          inputRef={name}
          error={errors.name}
        />
      </div>

      <div className="mb-5">
        <div className="text-end">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={() => setDisabled(!disabled)}
              className="sr-only peer"
              checked={disabled}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          </label>
        </div>
        <Select
          disabled={disabled}
          inputRef={category_id}
          className={`px-5  ${
            disabled === true ? "bg-gray-300" : "bg-gray-50"
          } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        >
          <option value="">Choose Category</option>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <option
                key={category.id}
                value={category.id}
                selected={sub_category.category_id === category.id}
              >
                {category.name}
              </option>
            ))}
        </Select>
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
          onClick={() => updateSubCategory(sub_category.id)}
          className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          update
        </button>
      </div>
    </Form>
  );
}
