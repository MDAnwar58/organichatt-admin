import React, { Fragment } from "react";
import { FilterIcon } from "../../../components/Icons";
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import GalleryGrid from "./GalleryGrid";

interface Props {
  galleryCategories?: any;
  galleryCategoryId?: any;
  itemHandle?: any;
  galleries?: any;
  searchHandler?: any;
  galleryId?: any;
  setGalleryId?: any;
  setImageUrl?: any;
  selectGalleryImages?: any;
  galleryImages?: any;
}

export default function Gallery({
  galleryCategories,
  galleryCategoryId,
  itemHandle,
  galleries,
  searchHandler,
  galleryId,
  selectGalleryImages,
  galleryImages,
}: Props) {
  return (
    <Fragment>
      <div className="flex pb-3">
        <Filter
          filterItems={galleryCategories}
          itemHandle={itemHandle}
          selectItemId={galleryCategoryId}
        >
          <span className="px-2 h-10 flex items-center text-xl uppercase font-semibold text-gray-700 dark:text-white bg-white dark:bg-gray-700 border border-gray-200 rounded-lg sm:me-3 me-1">
            <FilterIcon />
          </span>
        </Filter>
        <Input
          type="search"
          onChange={searchHandler}
          className="w-full h-10  border-1 border-gray-300/70 rounded-lg"
          placeholder="Search..."
        />
      </div>
      {galleries.length > 0 ? (
        <div className=" grid 7xl:grid-cols-6 4xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xs:grid-cols-2 grid-cols-1 gap-5">
          {galleries.map((gallery, index) => (
            <GalleryGrid
              key={index}
              gallery={gallery}
              galleryId={galleryId}
              selectGalleryImages={selectGalleryImages}
              galleryImages={galleryImages}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-gray-500">
          <h2>Gallery not found</h2>
        </div>
      )}
    </Fragment>
  );
}
