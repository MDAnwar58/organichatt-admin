import React, { Fragment, useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import OfferEditForm from "./OfferEditForm";
import { Provider, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";
import useBannerEditContext from "../context/OfferEditContext";
import useOfferEditContext from "../context/OfferEditContext";

export default function OfferEditContent({
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
  const {
    getOffer,
    getBrands,
    getCataegories,
    getSubCataegories,
    getProducts,
    brandDisabled,
    setBrandDisabled,
    categoryDisabled,
    setCategoryDisabled,
    subCategoryDisabled,
    setSubCategoryDisabled,
    productDisabled,
    setProductDisabled,
    brand_id,
    category_id,
    sub_category_id,
    product_id,
    name,
    percents,
    start_date,
    end_date,
    image_url,
    form,
    updateBrand,
  } = useOfferEditContext();

  const { id } = useParams();

  useEffect(() => {
    getBrands();
    getCataegories();
    getSubCataegories();
    getProducts();
    getOffer(id, setGalleryImage);
  }, []);

  const offer = useSelector((state) => state.offer);
  const errors = useSelector((state) => state.errors);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories);
  const sub_categories = useSelector((state) => state.sub_categories);
  const products = useSelector((state) => state.products);

  const brandHandle = () => {
    setBrandDisabled(!brandDisabled);
    if (brandDisabled === true) {
      setCategoryDisabled(true);
      setSubCategoryDisabled(true);
      setProductDisabled(true);
    }
  };
  const categoryHandle = () => {
    setCategoryDisabled(!categoryDisabled);
    if (categoryDisabled === true) {
      setBrandDisabled(true);
      setSubCategoryDisabled(true);
      setProductDisabled(true);
    }
  };
  const subCategoryHandle = () => {
    setSubCategoryDisabled(!subCategoryDisabled);
    if (subCategoryDisabled === true) {
      setBrandDisabled(true);
      setCategoryDisabled(true);
      setProductDisabled(true);
    }
  };
  const productHandle = () => {
    setProductDisabled(!productDisabled);
    if (productDisabled === true) {
      setBrandDisabled(true);
      setCategoryDisabled(true);
      setSubCategoryDisabled(true);
    }
  };

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Offer Updated" />
      <Provider store={store}>
        <OfferEditForm
          offer={offer}
          openGalleryModalHandler={openGalleryModalHandler}
          galleryImage={galleryImage}
          removeFile={removeFile}
          brands={brands}
          categories={categories}
          sub_categories={sub_categories}
          products={products}
          brandHandle={brandHandle}
          categoryHandle={categoryHandle}
          subCategoryHandle={subCategoryHandle}
          productHandle={productHandle}
          brandDisabled={brandDisabled}
          categoryDisabled={categoryDisabled}
          subCategoryDisabled={subCategoryDisabled}
          productDisabled={productDisabled}
          brand_id={brand_id}
          category_id={category_id}
          sub_category_id={sub_category_id}
          product_id={product_id}
          name={name}
          start_date={start_date}
          end_date={end_date}
          percents={percents}
          image_url={image_url}
          form={form}
          updateBrand={updateBrand}
          errors={errors}
        />
      </Provider>
    </div>
  );
}
