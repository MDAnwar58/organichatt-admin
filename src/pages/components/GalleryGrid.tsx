import React from "react";
import Image from "./Image";

interface Props {
  gallery?: any;
  galleryId?: any;
  selectGalleryImage?: any;
}

const GalleryGrid = ({ gallery, galleryId, selectGalleryImage }: any) => {
  const getGalleryName = (name) => {
    const maxLength = 12;
    if (name.length <= maxLength) {
      return name;
    } else {
      const truncatedName = name.slice(0, maxLength) + "... ";
      return truncatedName;
    }
  };

  return (
    <div
      onClick={() => selectGalleryImage(gallery.id, gallery.url)}
      className={` relative shadow-md bg-gray-50  dark:bg-gray-700 border ${
        gallery.id === galleryId
          ? "border-2 border-blue-500"
          : "border-1 border-gray-300/80 dark:border-gray-300/30"
      }  rounded-md`}
    >
      <Image
        src={gallery.url}
        alt="..."
        className="w-full bg-white dark:bg-gray-800 rounded-t-md 7xl:h-64 5xl:h-60 4lg:h-64 lg:h-56 5md:h-60 md:h-52 sm:h-64 xs:h-64 2xs:h-52 7xs:h-80 h-56"
      />
      <p className="flex justify-between px-3 py-1 text-gray-500 dark:text-white">
        <span>
          {getGalleryName(gallery.image_name)}.{gallery.image_extention}
        </span>
        <span>{gallery.image_size}</span>
      </p>
    </div>
  );
};

export default GalleryGrid;
