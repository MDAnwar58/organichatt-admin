import React from "react";
import { RemoveIcon } from "./Icons";

interface Props {
  title?: any;
  format?: any;
  maxSize?: any;
  onClick?: any;
  galleryImage?: any;
  inputRef?: any;
  className?: any;
  imgClassName?: any;
  inputValue?: any;
  removeFile?: any;
  onChange?: any;
  height?: any;
}

export default function ImageInputFile({
  title,
  format,
  maxSize,
  onClick,
  galleryImage,
  inputRef,
  imgClassName,
  className,
  inputValue,
  removeFile,
  onChange,
  height,
}: Props) {
  return (
    <div className=" relative flex items-center justify-center w-full">
      <label
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full h-${height} border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      >
        {!galleryImage.url && galleryImage.imageType !== "image" ? (
          <div
            className={`flex to-blue-500 flex-col items-center justify-center pt-5 pb-6 ${className}`}
          >
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
              {title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {format} {maxSize && `(MAX. ${maxSize})`}
            </p>
          </div>
        ) : (
          <>
            <img
              src={galleryImage.url}
              className={imgClassName}
              alt="gallery image"
            />
          </>
        )}
        <input
          type="text"
          ref={inputRef}
          onChange={onChange}
          className="w-full hidden"
          defaultValue={inputValue}
        />
      </label>
      {galleryImage.url && (
        <button
          type="button"
          onClick={() => removeFile()}
          className="bg-red-500 text-white px-2 py-1 rounded-lg absolute top-[0.2rem] right-[0.2rem]"
        >
          <RemoveIcon className={"font-bold"} />
        </button>
      )}
    </div>
  );
}
