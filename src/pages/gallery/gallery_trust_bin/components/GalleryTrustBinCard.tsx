import React from "react";
import Mango from "../../../../assets/images/mango.png";
import Image from "../../../components/Image";
import GalleryTrustBinDropDwonBtn from "./GalleryTrustBinDropDwonBtn";

export default function GalleryTrustBinCard({
  gallery,
  restoreHandler,
  deleteHandler,
  ids,
  handleGalleryCheck,
}: {
  gallery?: any;
  restoreHandler?: any;
  deleteHandler?: any;
  ids?: any;
  handleGalleryCheck?: any;
}) {
  return (
    <div className=" relative shadow-md bg-gray-50 border border-1 border-gray-300/80 rounded-md">
      <Image
        src={gallery.url}
        alt="gallery image"
        className="w-full bg-white rounded-t-md  7xl:h-64 5xl:h-60 4lg:h-64 lg:h-56 5md:h-60 md:h-52 sm:h-64 xs:h-64 2xs:h-52 h-80"
      />
      <div className=" absolute top-0 left-[0.35rem]">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={ids.includes(gallery.id)}
          onChange={() => handleGalleryCheck(gallery.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className=" absolute top-[0.30rem] right-[0.35rem]">
        <GalleryTrustBinDropDwonBtn
          gallery={gallery}
          restoreHandler={restoreHandler}
          deleteHandler={deleteHandler}
        />
      </div>
      <p className="flex justify-between px-3 py-1 text-gray-500">
        <span>
          {gallery.image_name}.{gallery.image_extention}
        </span>
        <span>{gallery.image_size}</span>
      </p>
    </div>
  );
}
