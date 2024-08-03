import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../../apiCalling/store";
import useGalleryContext from "../../../common_context/GalleryContext";
import GalleryModal from "../../../components/GalleryModal";
import CategoryEditContent from "./CategoryEditContent";

export default function CategoryEditPage() {
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
      <CategoryEditContent
        openGalleryModalHandler={openGalleryModalHandler}
        galleryImage={galleryImage}
        setGalleryImage={setGalleryImage}
        removeFile={removeFile}
      />

      <GalleryModal
        openGalleryModal={openGalleryModal}
        setOpenGalleryModal={setOpenGalleryModal}
        galleryCategoryId={galleryCategoryId}
        itemHandle={itemHandle}
        galleryCategories={galleryCategories}
        galleries={galleries}
        searchHandler={searchHandler}
        paginate={paginate}
        page={page}
        totalPage={totalPage}
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
        selectGalleryImage={selectGalleryImage}
        setGalleryId={setGalleryId}
        setGalleryImage={setGalleryImage}
      />
    </Provider>
  );
}
