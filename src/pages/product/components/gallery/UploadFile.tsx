import React from "react";
import { useSelector } from "react-redux";
import Input from "../../../components/Input";
import FileInput from "../../../components/FileInput";

interface Props {
  galleryCategories?: any;
  galleryCategoryName?: any;
  imagePreviewUrl?: any;
  imageHandle?: any;
  removeImage?: any;
  imageGalleryCategoryId?: any;
  image_name?: any;
  image?: any;
  addGallery?: any;
  galleryAddForm?: any;
  imageNameError?: any;
  setImageNameError?: any;
  imageError?: any;
}

export default function UploadFile({
  galleryCategories,
  galleryCategoryName,
  imagePreviewUrl,
  imageHandle,
  removeImage,
  imageGalleryCategoryId,
  image_name,
  image,
  addGallery,
  galleryAddForm,
  imageNameError,
  setImageNameError,
  imageError,
}: Props) {
  const errors = useSelector((state) => state.errors);

  return (
    <div className="bg-white/50 drop-shadow-sm pb-5 border mx-auto 5xl:w-[27%] 7lg:w-[31%] 4lg:w-4/12 lg:w-[37%] 5md:w-5/12 md:w-6/12 sm:w-7/12 2xs:w-9/12 5xs:w-11/12 w-full rounded-xl mt-20">
      <h2 className=" text-gray-700 dark:text-white text-xl font-semibold bg-blue-300 rounded-t-xl text-center py-1.5 uppercase">
        Gallery Image Upload
      </h2>
      <form ref={galleryAddForm} className="px-5 pt-5">
        {galleryCategories.length > 0 ? (
          galleryCategories.map(
            (category) =>
              category.name === galleryCategoryName && (
                <input
                  key={category.id}
                  type="hidden"
                  ref={imageGalleryCategoryId}
                  defaultValue={category.id}
                />
              )
          )
        ) : (
          <div className="text-red-400">
            Please add gallery category then add any image!
          </div>
        )}

        <div className="mb-3">
          <Input
            inputRef={image_name}
            className="w-full border border-gray-300 rounded-xl h-10 px-5"
            placeholder="Gallery image name"
            error={errors?.image_name}
            errorHandler={imageNameError}
            onChange={() => setImageNameError(false)}
          />
        </div>
        <div className="mb-3">
          <FileInput
            inputRef={image}
            inputText="SVG, PNG, JPG or GIF (MAX. 800x400px)"
            height="h-auto"
            imagePreviewUrl={imagePreviewUrl}
            imageHandle={imageHandle}
            removeImage={removeImage}
            error={errors?.image}
            errorHandler={imageError}
          />
        </div>
        <div className="text-end">
          <button
            type="button"
            onClick={() => addGallery()}
            className=" bg-blue-500 text-white px-5 py-1.5 rounded-xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
