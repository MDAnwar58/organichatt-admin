import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import { useSelector } from "react-redux";
import useProductEditContext from "../context/ProductEditContext";
import LanguageTab from "../../../components/LanguageTab";
import EnForm from "./EnForm";
import BnForm from "./BnForm";
import { useParams } from "react-router-dom";

interface Props {
  openGalleryModalHandler?: any;
  galleryImage?: any;
  removeFile?: any;
  sideBar?: any;
  setGalleryImage?: any;
}

export default function ProductEditForm({
  openGalleryModalHandler,
  galleryImage,
  removeFile,
  sideBar,
  setGalleryImage,
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
    getProduct,

    collectionDisabled,
    setCollectionDisabled,
    brandDisabled,
    setBrandDisabled,
    categoryDisabled,
    setCategoryDisabled,
    subCategoryDisabled,
    setSubCategoryDisabled,
    colorDisabled,
    setColorDisabled,
    colorSelectHandle,
    sizeDisabled,
    setSizeDisabled,
    sizeNumberDisabled,
    setSizeNumberDisabled,
    weightDisabled,
    setWeightDisabled,
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
    updateProduct,
  } = useProductEditContext();
  const [language, setLanguage] = useState("english");
  const { id } = useParams();

  useEffect(() => {
    getCollections();
    getBrands();
    getCategories();
    getSubCategories();
    getColors();
    getSizes();
    getSizeNumbers();
    getWeights();
    getProduct(
      id,
      setGalleryImage,
      setCollectionDisabled,
      setBrandDisabled,
      setCategoryDisabled,
      setSubCategoryDisabled,
      setColorDisabled,
      setSizeDisabled,
      setSizeNumberDisabled,
      setWeightDisabled,
      setColorIds,
      setSizes,
      setSizeNumbers,
      setWeights,
      setTags
    );
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

  return (
    <div className=" w-full pt-0 mt-16">
      <FormHeader title="Product Edit" />
      <LanguageTab language={language} setLanguage={setLanguage} />
      {language === "english" ? (
        <EnForm
          form={form}
          sideBar={sideBar}
          name={name}
          title={title}
          price={price}
          discount_price={discount_price}
          perchese_quantity={perchese_quantity}
          available_quantity={available_quantity}
          galleryImage={galleryImage}
          openGalleryModalHandler={openGalleryModalHandler}
          image_url={image_url}
          removeFile={removeFile}
          setRefundable={setRefundable}
          collectionDisabled={collectionDisabled}
          collection_id={collection_id}
          collections={collections}
          setCollectionDisabled={setCollectionDisabled}
          brandDisabled={brandDisabled}
          brand_id={brand_id}
          brands={brands}
          setBrandDisabled={setBrandDisabled}
          categoryDisabled={categoryDisabled}
          category_id={category_id}
          categories={categories}
          subCategoryDisabled={subCategoryDisabled}
          setCategoryDisabled={setCategoryDisabled}
          sub_category_id={sub_category_id}
          sub_categories={sub_categories}
          setSubCategoryDisabled={setSubCategoryDisabled}
          descriptionConfig={descriptionConfig}
          des={des}
          colorDisabled={colorDisabled}
          colors={colors}
          setColorDisabled={setColorDisabled}
          colorSelectHandle={colorSelectHandle}
          colorIds={colorIds}
          sizeDisabled={sizeDisabled}
          setSizeDisabled={setSizeDisabled}
          sizes={sizes}
          addNewSizeFields={addNewSizeFields}
          Sizes={Sizes}
          handleSizeSelectChange={handleSizeSelectChange}
          handleSizePriceChange={handleSizePriceChange}
          handleSizeDiscountPriceChange={handleSizeDiscountPriceChange}
          sizeNumberDisabled={sizeNumberDisabled}
          setSizeNumberDisabled={setSizeNumberDisabled}
          size_numbers={size_numbers}
          addNewSizeNumberFields={addNewSizeNumberFields}
          SizeNumbers={SizeNumbers}
          handleSizeNumberSelectChange={handleSizeNumberSelectChange}
          handleSizeNumberPriceChange={handleSizeNumberPriceChange}
          handleSizeNumberDiscountPriceChange={
            handleSizeNumberDiscountPriceChange
          }
          weightDisabled={weightDisabled}
          setWeightDisabled={setWeightDisabled}
          weights={weights}
          addNewWeightFields={addNewWeightFields}
          Weights={Weights}
          handleWeightSelectChange={handleWeightSelectChange}
          handleWeightPriceChange={handleWeightPriceChange}
          handleWeightDiscountPriceChange={handleWeightDiscountPriceChange}
          tags={tags}
          setTags={setTags}
          meta_title={meta_title}
          metaDescriptionConfig={metaDescriptionConfig}
          meta_des={meta_des}
          sepecificationConfig={sepecificationConfig}
          specification={specification}
          removeFieldHandler={removeFieldHandler}
          updateProduct={updateProduct}
          errors={errors}
        />
      ) : (
        <BnForm />
      )}
    </div>
  );
}
