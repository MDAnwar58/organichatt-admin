import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";
import Select from "../../../components/Select";
import { useSelector } from "react-redux";
import InputRadio from "../../../components/InputRadio";
import ToogleCheckBox from "../../../components/ToogleCheckBox";
import MultipleSelect from "../../../components/MultipleSelect";
import TextEditor from "../../../components/TextEditor";
import InputTag from "../../../components/InputTag";
import useProductCreateContext from "../context/ProductCreateContext";
import MultipleInputAdd from "../../../components/MultipleInputAdd";

interface Props {
  openGalleryModalHandler?: any;
  galleryImage?: any;
  removeFile?: any;
  sideBar?: any;
}

export default function ProductForm({
  openGalleryModalHandler,
  galleryImage,
  removeFile,
  sideBar,
}: Props) {
  const {
    getCollections,
    getBrands,
    getCategories,
    getSubCategories,
    getColors,
    getSizes,
    getSizeNumbers,
    getWeights,
    name,
    title,
    price,
    discount_price,
    perchese_quantity,
    available_quantity,
    setRefundable,
    image_url,
    collection_id,
    brand_id,
    category_id,
    sub_category_id,
    des,
    colorIds,
    setColorIds,
    Sizes,
    setSizes,
    SizeNumbers,
    setSizeNumbers,
    Weights,
    setWeights,
    tags,
    setTags,
    meta_title,
    meta_des,
    specification,
    setStatus,
    form,
    removeFieldHandler,
    addProduct,
  } = useProductCreateContext();
  const [collectionDisabled, setCollectionDisabled] = useState(true);
  const [brandDisabled, setBrandDisabled] = useState(true);
  const [categoryDisabled, setCategoryDisabled] = useState(true);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
  const [colorDisabled, setColorDisabled] = useState(true);
  const [sizeDisabled, setSizeDisabled] = useState(true);
  const [sizeNumberDisabled, setSizeNumberDisabled] = useState(true);
  const [weightDisabled, setWeightDisabled] = useState(true);

  useEffect(() => {
    getCollections();
    getBrands();
    getCategories();
    getSubCategories();
    getColors();
    getSizes();
    getSizeNumbers();
    getWeights();
  }, []);

  const errors = useSelector((state) => state.errors);
  const collections = useSelector((state) => state.collections);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories);
  const sub_categories = useSelector((state) => state.sub_categories);
  const colors = useSelector((state) => state.colors);
  const sizes = useSelector((state) => state.sizes);
  const size_numbers = useSelector((state) => state.size_numbers);
  const weights = useSelector((state) => state.weights);

  const sepecificationConfig = {
    readonly: false,
    placeholder: "write specification...",
    height: 580,
    toolbarButtonSize: "large",
  };
  const descriptionConfig = {
    readonly: false,
    height: 423,
    toolbarButtonSize: "large",
    placeholder: "write description...",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "|",
      "image",
      "video",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "copyformat",
      "|",
      "hr",
      "symbol",
      "fullsize",
      "preview",
      "print",
      "source",
    ],
  };
  const metaDescriptionConfig = {
    readonly: false,
    height: 300,
    toolbarButtonSize: "small",
    placeholder: "write meta description...",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "|",
      "image",
      "video",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "copyformat",
      "|",
      "hr",
      "symbol",
      "fullsize",
      "preview",
      "print",
      "source",
    ],
  };

  const colorSelectHandle = (colorId) => {
    const selectedColorId = colorId;
    setColorIds((prevIds) => {
      if (prevIds.includes(selectedColorId)) {
        return prevIds.filter((id) => id !== selectedColorId);
      } else {
        return [...prevIds, selectedColorId];
      }
    });
  };

  // multiple input fields add event start
  // * size event start
  const addNewSizeFields = () => {
    setSizes([...Sizes, { size_id: "", price: "", discount_price: "" }]);
  };
  const handleSizeSelectChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFields = [...Sizes];
    newFields[index].size_id = event.target.value;
    setSizes(newFields);
  };
  const handleSizePriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...Sizes];
    newFields[index].price = event.target.value;
    setSizes(newFields);
  };
  const handleSizeDiscountPriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...Sizes];
    newFields[index].discount_price = event.target.value;
    setSizes(newFields);
  };
  // * size event end

  // * size number event start
  const addNewSizeNumberFields = () => {
    setSizeNumbers([
      ...SizeNumbers,
      { size_number_id: "", price: "", discount_price: "" },
    ]);
  };
  const handleSizeNumberSelectChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFields = [...SizeNumbers];
    newFields[index].size_number_id = event.target.value;
    setSizeNumbers(newFields);
  };
  const handleSizeNumberPriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...SizeNumbers];
    newFields[index].price = event.target.value;
    setSizeNumbers(newFields);
  };
  const handleSizeNumberDiscountPriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...SizeNumbers];
    newFields[index].discount_price = event.target.value;
    setSizeNumbers(newFields);
  };
  // * size number event end

  // * weight event start
  const addNewWeightFields = () => {
    setWeights([...Weights, { weight_id: "", price: "", discount_price: "" }]);
  };
  const handleWeightSelectChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFields = [...Weights];
    newFields[index].weight_id = event.target.value;
    setWeights(newFields);
  };
  const handleWeightPriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...Weights];
    newFields[index].price = event.target.value;
    setWeights(newFields);
  };
  const handleWeightDiscountPriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = [...Weights];
    newFields[index].discount_price = event.target.value;
    setWeights(newFields);
  };
  // * weight event end
  // multiple input fields add event end

  // const sizeNumberSelectHandle = (e) => {
  //   const selectedSizeNumberId = e.target.value;
  //   setSizeNumberIds((prevIds) => {
  //     if (prevIds.includes(selectedSizeNumberId)) {
  //       return prevIds.filter((id) => id !== selectedSizeNumberId);
  //     } else {
  //       return [...prevIds, selectedSizeNumberId];
  //     }
  //   });
  // };
  // const weightSelectHandle = (e) => {
  //   const selectedWeightId = e.target.value;
  //   setWeightIds((prevIds) => {
  //     if (prevIds.includes(selectedWeightId)) {
  //       return prevIds.filter((id) => id !== selectedWeightId);
  //     } else {
  //       return [...prevIds, selectedWeightId];
  //     }
  //   });
  // };
  return (
    <div className=" w-full pt-0 mt-16">
      <FormHeader title="Product Added" />
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
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={title}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product title"
                  error={errors.title}
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
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={discount_price}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Discount price"
                  error={errors.discount_price}
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
                />
              </div>
              <div className="mb-5">
                <ImageInputFile
                  title=" and choose file"
                  format="PNG, JPG or GIF"
                  galleryImage={galleryImage}
                  imgClassName="h-full"
                  onClick={() => openGalleryModalHandler("image")}
                  inputValue={galleryImage.url}
                  removeFile={removeFile}
                  inputRef={image_url}
                  height={52}
                />
                {errors.image_url && (
                  <small className="text-red-500 px-3">
                    {errors.image_url}
                  </small>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="refundable">Refundable</label>
                <InputRadio
                  label="Yes"
                  defaultValue="yes"
                  idWithDetectLabel="yes"
                  defaultChecked={true}
                  onChange={(e) => setRefundable(e.target.value)}
                />
                <InputRadio
                  label="No"
                  defaultValue="no"
                  idWithDetectLabel="no"
                  onChange={(e) => setRefundable(e.target.value)}
                />
                {errors.refundable && (
                  <small className="text-red-500 px-3">
                    {errors.refundable}
                  </small>
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
                >
                  <option
                    className="text-gray-600 text-md font-medium"
                    value=""
                  >
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
                >
                  <option
                    value=""
                    className="text-gray-600 text-md font-medium"
                  >
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
                  required
                >
                  <option
                    value=""
                    className="text-gray-600 text-md font-medium"
                  >
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
                >
                  <option
                    value=""
                    className="text-gray-600 text-md font-medium"
                  >
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
              <TextEditor config={descriptionConfig} textEditorRef={des} />
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
                />
              </div>
              <div className="mb-5">
                <TextEditor
                  config={metaDescriptionConfig}
                  textEditorRef={meta_des}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
          <TextEditor
            config={sepecificationConfig}
            textEditorRef={specification}
          />
        </div>
        <div className=" flex justify-end items-center">
          <button
            type="button"
            onClick={(e) => addProduct(e)}
            className="text-md font-semibold text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
            value="publish"
          >
            Publish & Save
          </button>
          <button
            type="button"
            onClick={(e) => addGallery(e)}
            className="ms-3 text-md font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
            value="unpublish"
          >
            Unpublish & Save
          </button>
        </div>
      </form>
    </div>
  );
}
