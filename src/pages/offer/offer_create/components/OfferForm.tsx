import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";
import { useSelector } from "react-redux";
import useOfferCreateContext from "../context/OfferCreateContext";
import Select from "../../../components/Select";

export default function OfferForm({
  openGalleryModalHandler,
  galleryImage,
  removeFile,
}: {
  openGalleryModalHandler?: any;
  galleryImage?: any;
  removeFile?: any;
}) {
  const {
    getBrands,
    getCataegories,
    getSubCataegories,
    getProducts,
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
    addBanner,
  } = useOfferCreateContext();
  const [brandDisabled, setBrandDisabled] = useState(true);
  const [categoryDisabled, setCategoryDisabled] = useState(true);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
  const [productDisabled, setProductDisabled] = useState(true);

  useEffect(() => {
    getBrands();
    getCataegories();
    getSubCataegories();
    getProducts();
  }, []);

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
      <FormHeader title="Offer Added" />
      <Form formRef={form} className={"p-5"}>
        <div className="mb-2">
          <Input
            type="text"
            inputRef={name}
            className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Offer name"
            error={errors.name}
          />
        </div>

        <div className="mb-1">
          <div className=" flex items-center">
            <input
              type="text"
              ref={percents}
              className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Offer percentage"
            />
            <div className=" border border-gray-300 text-gray-300 bg-gray-50 py-2 px-3 rounded-e-lg">
              %
            </div>
          </div>

          {errors.percents && (
            <small className="text-red-500 px-3">{errors.percents}</small>
          )}
        </div>

        <div className="mb-3">
          <div className=" flex items-center">
            <div className="w-full pe-1">
              <label htmlFor="start_date" className="text-gray-500 text-md">
                Start Date
              </label>
              <input
                type="date"
                ref={start_date}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full ps-1">
              <label htmlFor="start_date" className="text-gray-500 text-md">
                End Date
              </label>
              <input
                type="date"
                ref={end_date}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          {errors.start_date && (
            <small className="text-red-500 px-3">{errors.start_date}</small>
          )}
          {errors.end_date && (
            <small className="text-red-500 px-3">{errors.end_date}</small>
          )}
        </div>

        <div className="mb-3">
          <div className="flex">
            <Select
              disabled={brandDisabled}
              inputRef={brand_id}
              className={`px-5 ${
                brandDisabled === true ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2`}
            >
              <option value="">Choose Brand</option>
              {brands.length > 0 &&
                brands.map((brand, index) => (
                  <option key={index + 1} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
            </Select>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => brandHandle()}
                className="sr-only peer"
                checked={brandDisabled}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex">
            <Select
              disabled={categoryDisabled}
              inputRef={category_id}
              className={`px-5 ${
                categoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2`}
            >
              <option value="">Choose Category</option>
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <option key={index + 1} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => categoryHandle()}
                className="sr-only peer"
                checked={categoryDisabled}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex">
            <Select
              disabled={subCategoryDisabled}
              inputRef={sub_category_id}
              className={`px-5 ${
                subCategoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2`}
            >
              <option value="">Choose Sub Category</option>
              {sub_categories.length > 0 &&
                sub_categories.map((sub_category, index) => (
                  <option key={index + 1} value={sub_category.id}>
                    {sub_category.name}
                  </option>
                ))}
            </Select>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => subCategoryHandle()}
                className="sr-only peer"
                checked={subCategoryDisabled}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex">
            <Select
              disabled={productDisabled}
              inputRef={product_id}
              className={`px-5 ${
                productDisabled === true ? "bg-gray-300" : "bg-gray-50"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2`}
            >
              <option value="">Choose Product</option>
              {products.length > 0 &&
                products.map((product, index) => (
                  <option key={index + 1} value={product.id}>
                    {product.name}
                  </option>
                ))}
            </Select>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => productHandle()}
                className="sr-only peer"
                checked={productDisabled}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>

        <div className="mb-3">
          <ImageInputFile
            title=" and choose file"
            format="PNG, JPG or GIF"
            maxSize="20MB"
            galleryImage={galleryImage}
            imgClassName="h-40 rounded-lg"
            onClick={() => openGalleryModalHandler("image")}
            inputValue={galleryImage.url}
            removeFile={removeFile}
            inputRef={image_url}
          />
          {errors.image_url && (
            <small className="text-red-500 px-3">{errors.image_url}</small>
          )}
        </div>

        <div className=" text-end">
          <button
            type="button"
            onClick={() => addBanner()}
            className="text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}
