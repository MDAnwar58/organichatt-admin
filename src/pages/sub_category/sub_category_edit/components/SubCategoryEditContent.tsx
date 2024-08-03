import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import LanguageTab from "../../../components/LanguageTab";
import EnForm from "./EnForm";
import BnForm from "./BnForm";
import { Provider, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";
import useSubCategoryEditContext from "../context/SubCategoryEditContext";

export default function SubCategoryEditContent({
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
    getCategories,
    getSubCategory,
    name,
    category_id,
    image_url,
    form,
    updateSubCategory,
    disabled,
    setDisabled,
  } = useSubCategoryEditContext();

  const { id } = useParams();
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    getCategories();
    getSubCategory(id, setGalleryImage);
  }, []);

  const sub_category = useSelector((state) => state.sub_category);
  const errors = useSelector((state) => state.errors);
  const categories = useSelector((state) => state.categories);

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Sub Category Updated" />
      <LanguageTab language={language} setLanguage={setLanguage} />
      <Provider store={store}>
        {language === "english" && (
          <EnForm
            categories={categories}
            sub_category={sub_category}
            openGalleryModalHandler={openGalleryModalHandler}
            galleryImage={galleryImage}
            removeFile={removeFile}
            name={name}
            category_id={category_id}
            image_url={image_url}
            form={form}
            updateSubCategory={updateSubCategory}
            errors={errors}
            disabled={disabled}
            setDisabled={setDisabled}
          />
        )}
        {language === "bangla" && <BnForm />}
      </Provider>
    </div>
  );
}
