import React, { Fragment, useEffect } from "react";
import ProductContent from "./ProductContent";
import { Provider, useSelector } from "react-redux";
import store from "../apiCalling/store";
import useGalleryContext from "../../common_context/GalleryContext";

export default function ProductPage() {
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
    selectGalleryImages,
    galleryImages,
    setGalleryImages,
    galleryImageRemoveHandle,
    openGalleryModalHandler,
    removeFile,
  } = useGalleryContext();

  useEffect(() => {
    getGalleryCategories(); // this for gallery categories
    getGalleries(); // this for galleries
  }, []);

  const galleries = useSelector((state) => state.galleries);
  const galleryCategories = useSelector((state) => state.galleryCategories);

  return (
    <Fragment>
      <Provider store={store}>
        <ProductContent
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
          selectGalleryImages={selectGalleryImages}
          galleryImages={galleryImages}
          galleryImageRemoveHandle={galleryImageRemoveHandle}
          setGalleryId={setGalleryId}
          setGalleryImage={setGalleryImage}
          setGalleryImages={setGalleryImages}
        />
      </Provider>
    </Fragment>
  );
}
