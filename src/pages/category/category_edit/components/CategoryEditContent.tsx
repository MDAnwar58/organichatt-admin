import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import LanguageTab from "../../../components/LanguageTab";
import EnForm from "./EnForm";
import BnForm from "./BnForm";
import { Provider, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";
import useCategoryEditContext from "../context/CategoryEditContext";

export default function CategoryEditContent({
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
  const { getBrand, name, image_url, form, updateBrand } =
    useCategoryEditContext();

  const { id } = useParams();
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    getBrand(id, setGalleryImage);
  }, []);

  const category = useSelector((state) => state.category);
  const errors = useSelector((state) => state.errors);

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Category Updated" />
      <LanguageTab language={language} setLanguage={setLanguage} />
      <Provider store={store}>
        {language === "english" && (
          <EnForm
            category={category}
            openGalleryModalHandler={openGalleryModalHandler}
            galleryImage={galleryImage}
            setGalleryImage={setGalleryImage}
            removeFile={removeFile}
            name={name}
            image_url={image_url}
            form={form}
            updateBrand={updateBrand}
            errors={errors}
          />
        )}
        {language === "bangla" && <BnForm />}
      </Provider>
    </div>
  );
}
