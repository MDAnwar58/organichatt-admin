import React, { Fragment, useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import BannerEditForm from "./BannerEditForm";
import { Provider, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";
import useBannerEditContext from "../context/BannerEditContext";

export default function BannerEditContent({
  openGalleryModalHandler,
  galleryImage,
  setGalleryImage,
  removeFile,
}: {
  openGalleryModalHandler?: any;
  galleryImage?: any;
  setGalleryImage?: any;
  removeFile?: any;
}) {
  const { getBanner, image_url, form, updateBrand } = useBannerEditContext();

  const { id } = useParams();

  useEffect(() => {
    getBanner(id, setGalleryImage);
  }, []);

  const banner = useSelector((state) => state.banner);
  const errors = useSelector((state) => state.errors);

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Banner Updated" />
      <Provider store={store}>
        <BannerEditForm
          banner={banner}
          openGalleryModalHandler={openGalleryModalHandler}
          galleryImage={galleryImage}
          removeFile={removeFile}
          image_url={image_url}
          form={form}
          updateBrand={updateBrand}
          errors={errors}
        />
      </Provider>
    </div>
  );
}
