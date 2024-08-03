import React from "react";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";
import InputRadio from "../../../components/InputRadio";
import Select from "../../../components/Select";
import ToogleCheckBox from "../../../components/ToogleCheckBox";
import TextEditor from "../../../components/TextEditor";
import MultipleSelect from "../../../components/MultipleSelect";
import MultipleInputAdd from "../../../components/MultipleInputAdd";
import InputTag from "../../../components/InputTag";
import { useSelector } from "react-redux";

interface Props {
  form?: any;
  sideBar?: any;
  name?: any;
  title?: any;
  price?: any;
  discount_price?: any;
  perchese_quantity?: any;
  available_quantity?: any;
  galleryImage?: any;
  openGalleryModalHandler?: any;
  image_url?: any;
  removeFile?: any;
  setRefundable?: any;
  collectionDisabled?: any;
  collection_id?: any;
  collections?: any;
  setCollectionDisabled?: any;
  brandDisabled?: any;
  brand_id?: any;
  brands?: any;
  setBrandDisabled?: any;
  categoryDisabled?: any;
  category_id?: any;
  categories?: any;
  subCategoryDisabled?: any;
  setCategoryDisabled?: any;
  sub_category_id?: any;
  sub_categories?: any;
  setSubCategoryDisabled?: any;
  descriptionConfig?: any;
  des?: any;
  colorDisabled?: any;
  colors?: any;
  setColorDisabled?: any;
  colorSelectHandle?: any;
  colorIds?: any;
  sizeDisabled?: any;
  setSizeDisabled?: any;
  sizes?: any;
  addNewSizeFields?: any;
  Sizes?: any;
  handleSizeSelectChange?: any;
  handleSizePriceChange?: any;
  handleSizeDiscountPriceChange?: any;
  sizeNumberDisabled?: any;
  setSizeNumberDisabled?: any;
  size_numbers?: any;
  addNewSizeNumberFields?: any;
  SizeNumbers?: any;
  handleSizeNumberSelectChange?: any;
  handleSizeNumberPriceChange?: any;
  handleSizeNumberDiscountPriceChange?: any;
  weightDisabled?: any;
  setWeightDisabled?: any;
  weights?: any;
  addNewWeightFields?: any;
  Weights?: any;
  handleWeightSelectChange?: any;
  handleWeightPriceChange?: any;
  handleWeightDiscountPriceChange?: any;
  tags?: any;
  setTags?: any;
  meta_title?: any;
  metaDescriptionConfig?: any;
  meta_des?: any;
  sepecificationConfig?: any;
  specification?: any;
  removeFieldHandler?: any;
  updateProduct?: any;
  errors?: any;
}

export default function EnForm({
  form,
  sideBar,
  name,
  title,
  price,
  discount_price,
  perchese_quantity,
  available_quantity,
  galleryImage,
  openGalleryModalHandler,
  image_url,
  removeFile,
  setRefundable,
  collectionDisabled,
  collection_id,
  collections,
  setCollectionDisabled,
  brandDisabled,
  brand_id,
  brands,
  setBrandDisabled,
  categoryDisabled,
  category_id,
  categories,
  subCategoryDisabled,
  setCategoryDisabled,
  sub_category_id,
  sub_categories,
  setSubCategoryDisabled,
  descriptionConfig,
  des,
  colorDisabled,
  colors,
  setColorDisabled,
  colorSelectHandle,
  colorIds,
  sizeDisabled,
  setSizeDisabled,
  sizes,
  addNewSizeFields,
  Sizes,
  handleSizeSelectChange,
  handleSizePriceChange,
  handleSizeDiscountPriceChange,
  sizeNumberDisabled,
  setSizeNumberDisabled,
  size_numbers,
  addNewSizeNumberFields,
  SizeNumbers,
  handleSizeNumberSelectChange,
  handleSizeNumberPriceChange,
  handleSizeNumberDiscountPriceChange,
  weightDisabled,
  setWeightDisabled,
  weights,
  addNewWeightFields,
  Weights,
  handleWeightSelectChange,
  handleWeightPriceChange,
  handleWeightDiscountPriceChange,
  tags,
  setTags,
  meta_title,
  metaDescriptionConfig,
  meta_des,
  sepecificationConfig,
  specification,
  removeFieldHandler,
  updateProduct,
  errors,
}: Props) {
  const product = useSelector((state) => state.product);

  return (
    <form ref={form}>
      <div className={`${sideBar === true ? "4lg:flex" : "6md:flex"}`}>
        <div
          className={`${
            sideBar === true ? "4lg:w-6/12 w-full" : "6md:w-6/12 w-full"
          } pt-3`}
        >
          <div className="p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <div className="mb-5">
              <Input
                type="text"
                inputRef={name}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product name"
                error={errors.name}
                required
                Value={product.name}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                inputRef={title}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product title"
                error={errors.title}
                Value={product.title}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                inputRef={price}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                error={errors.price}
                required
                Value={product.price}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                inputRef={discount_price}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discount price"
                error={errors.discount_price}
                Value={product.discount_price}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                inputRef={perchese_quantity}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Perchese quantity"
                error={errors.perchese_quantity}
                required
                Value={product.perchese_quantity}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                inputRef={available_quantity}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Available quantity"
                error={errors.available_quantity}
                required
                Value={product.available_quantity}
              />
            </div>
            <div className="mb-5">
              <ImageInputFile
                title=" and choose file"
                format="PNG, JPG or GIF"
                galleryImage={galleryImage}
                imgClassName="h-52"
                onClick={() => openGalleryModalHandler("image")}
                inputValue={galleryImage.url}
                removeFile={removeFile}
                inputRef={image_url}
                height={52}
              />
              {errors.image_url && (
                <small className="text-red-500 px-3">{errors.image_url}</small>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="refundable">Refundable</label>
              <InputRadio
                label="Yes"
                defaultValue="yes"
                idWithDetectLabel="yes"
                defaultChecked={product.refundable}
                onChange={(e) => setRefundable(e.target.value)}
              />
              <InputRadio
                label="No"
                defaultValue="no"
                idWithDetectLabel="no"
                onChange={(e) => setRefundable(e.target.value)}
                defaultChecked={product.Refundable}
              />
              {errors.refundable && (
                <small className="text-red-500 px-3">{errors.refundable}</small>
              )}
            </div>
            <div className=" flex items-center mb-5">
              <Select
                disabled={collectionDisabled}
                inputRef={collection_id}
                className={`px-5 ${
                  collectionDisabled === true ? "bg-gray-300" : "bg-gray-50"
                } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                error={errors.collection_id}
                selectedValue={product.collection_id}
              >
                <option className="text-gray-600 text-md font-medium" value="">
                  Choose collection
                </option>
                {collections.length > 0 &&
                  collections.map((collection, index) => (
                    <option
                      key={collection.id}
                      value={collection.id}
                      className="text-gray-700 text-xl font-medium"
                    >
                      {collection.name}
                    </option>
                  ))}
              </Select>
              <ToogleCheckBox
                onChange={() => setCollectionDisabled(!collectionDisabled)}
                defaultChecked={true}
              />
            </div>
            <div className=" flex items-center mb-5">
              <Select
                disabled={brandDisabled}
                inputRef={brand_id}
                className={`px-5 ${
                  brandDisabled === true ? "bg-gray-300" : "bg-gray-50"
                } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                selectedValue={product.brand_id}
              >
                <option className="text-gray-600 text-md font-medium">
                  Choose brand
                </option>
                {brands.length > 0 ? (
                  brands.map((brand, index) => (
                    <option key={index + 1} value={brand.id}>
                      {brand.name}
                    </option>
                  ))
                ) : (
                  <option className=" text-gray-600 text-xl font-medium">
                    Brands not found
                  </option>
                )}
              </Select>
              <ToogleCheckBox
                onChange={() => setBrandDisabled(!brandDisabled)}
                defaultChecked={true}
              />
            </div>
            <div className="flex items-center mb-5">
              <Select
                disabled={categoryDisabled}
                inputRef={category_id}
                className={`px-5 ${
                  categoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
                } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                selectedValue={product.category_id}
                required
              >
                <option className="text-gray-600 text-md font-medium">
                  Choose category
                </option>
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <option key={index + 1} value={category.id}>
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option className=" text-gray-600 text-xl font-medium">
                    Categories not found
                  </option>
                )}
              </Select>

              <ToogleCheckBox
                onChange={() => setCategoryDisabled(!categoryDisabled)}
                defaultChecked={true}
              />
            </div>
            <div className="flex items-center">
              <Select
                disabled={subCategoryDisabled}
                inputRef={sub_category_id}
                className={`px-5 ${
                  subCategoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
                } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                selectedValue={product.sub_category_id}
              >
                <option className="text-gray-600 text-md font-medium">
                  Choose sub category
                </option>
                {sub_categories.length > 0 ? (
                  sub_categories.map((sub_category, index) => (
                    <option key={index + 1} value={sub_category.id}>
                      {sub_category.name}
                    </option>
                  ))
                ) : (
                  <option className=" text-gray-600 text-md font-medium">
                    Sub Category not found
                  </option>
                )}
              </Select>
              <ToogleCheckBox
                onChange={() => setSubCategoryDisabled(!subCategoryDisabled)}
                defaultChecked={true}
              />
            </div>
          </div>

          <div className="my-3 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <TextEditor
              config={descriptionConfig}
              textEditorRef={des}
              value={product.description}
            />
          </div>
        </div>
        <div
          className={`${
            sideBar === true
              ? "4lg:w-6/12 w-full 4lg:ps-3"
              : "6md:w-6/12 6md:ps-3 w-full"
          } pt-3`}
        >
          <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <MultipleSelect
              disabled={colorDisabled}
              label="Select colors"
              size={5}
              items={colors}
              defaultChecked
              detectOptionWithlabel="colors"
              onChangeToogleCheck={() => setColorDisabled(!colorDisabled)}
              onClick={colorSelectHandle}
              ids={colorIds}
            />
          </div>
          <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <MultipleInputAdd
              label="Select Size With Price"
              disabled={sizeDisabled}
              defaultChecked
              onChangeToogleCheck={() => setSizeDisabled(!sizeDisabled)}
              options={sizes}
              onBtnClick={addNewSizeFields}
              fields={Sizes}
              onChangeSelect={handleSizeSelectChange}
              onChangePrice={handleSizePriceChange}
              onChangeDiscountPrice={handleSizeDiscountPriceChange}
              onClickFieldRemoveHandle={removeFieldHandler}
              removeItemName="size"
            />
          </div>
          <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <MultipleInputAdd
              label="Select Size Number With Price"
              disabled={sizeNumberDisabled}
              defaultChecked
              onChangeToogleCheck={() =>
                setSizeNumberDisabled(!sizeNumberDisabled)
              }
              options={size_numbers}
              onBtnClick={addNewSizeNumberFields}
              fields={SizeNumbers}
              onChangeSelect={handleSizeNumberSelectChange}
              onChangePrice={handleSizeNumberPriceChange}
              onChangeDiscountPrice={handleSizeNumberDiscountPriceChange}
              onClickFieldRemoveHandle={removeFieldHandler}
              removeItemName="size_number"
            />
          </div>
          <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <MultipleInputAdd
              label="Select Weight With Price"
              disabled={weightDisabled}
              defaultChecked
              onChangeToogleCheck={() => setWeightDisabled(!weightDisabled)}
              options={weights}
              onBtnClick={addNewWeightFields}
              fields={Weights}
              onChangeSelect={handleWeightSelectChange}
              onChangePrice={handleWeightPriceChange}
              onChangeDiscountPrice={handleWeightDiscountPriceChange}
              onClickFieldRemoveHandle={removeFieldHandler}
              removeItemName="weight"
            />
          </div>
          <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
            <div className="mb-5">
              <InputTag tags={tags} setTags={setTags} />
            </div>

            <div className="mb-5">
              <Input
                type="text"
                inputRef={meta_title}
                className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Meta title"
                error={errors.meta_title}
                Value={product.meta_title}
              />
            </div>
            <div className="mb-5">
              <TextEditor
                config={metaDescriptionConfig}
                textEditorRef={meta_des}
                value={product.meta_description}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
        <TextEditor
          config={sepecificationConfig}
          textEditorRef={specification}
          value={product.specification}
        />
      </div>
      <div className=" flex justify-end items-center">
        <button
          type="button"
          onClick={(e) => updateProduct(e, product.id)}
          className="text-md font-semibold text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
          value="publish"
        >
          Publish & Update
        </button>
        <button
          type="button"
          onClick={(e) => updateProduct(e, product.id)}
          className="ms-3 text-md font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
          value="unpublish"
        >
          Unpublish & Update
        </button>
      </div>
    </form>
  );
}
