import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import SubCategoryContent from "./SubCategoryContent";
import store from "../apiCalling/store";
import useGalleryContext from "../../common_context/GalleryContext";

export default function SubCategoryPage() {
  const {
    getGalleryCategories,
    getGalleries,
    openGalleryModal,
    setOpenGalleryModal,
    galleryCategoryId,
    itemHandle,
    searchHandler,
    paginate,
    page,
    totalPage,
    imagePreviewUrl,
    imageHandle,
    removeImage,
    imageGalleryCategoryId,
    image_name,
    image,
    addGallery,
    galleryAddForm,
    tab,
    setTab,
    imageNameError,
    setImageNameError,
    imageError,
    galleryId,
    setGalleryId,
    galleryImage,
    setGalleryImage,
    selectGalleryImage,
    openGalleryModalHandler,
    removeFile,
  } = useGalleryContext();

  useEffect(() => {
    getGalleryCategories();
    getGalleries();
  }, []);
  const galleries = useSelector((state) => state.galleries);
  const galleryCategories = useSelector((state) => state.galleryCategories);

  return (
    <Provider store={store}>
      <SubCategoryContent
        openGalleryModal={openGalleryModal}
        setOpenGalleryModal={setOpenGalleryModal}
        galleryCategoryId={galleryCategoryId}
        ItemHandle={itemHandle}
        searchHandler={searchHandler}
        paginate={paginate}
        Page={page}
        TotalPage={totalPage}
        imagePreviewUrl={imagePreviewUrl}
        imageHandle={imageHandle}
        removeImage={removeImage}
        imageGalleryCategoryId={imageGalleryCategoryId}
        image_name={image_name}
        image={image}
        addGallery={addGallery}
        galleryAddForm={galleryAddForm}
        tab={tab}
        setTab={setTab}
        imageNameError={imageNameError}
        setImageNameError={setImageNameError}
        imageError={imageError}
        galleryId={galleryId}
        setGalleryId={setGalleryId}
        galleryImage={galleryImage}
        setGalleryImage={setGalleryImage}
        selectGalleryImage={selectGalleryImage}
        removeFile={removeFile}
        galleryCategories={galleryCategories}
        galleries={galleries}
        openGalleryModalHandler={openGalleryModalHandler}
      />
    </Provider>
  );
}
