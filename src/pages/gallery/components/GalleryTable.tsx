import React, { Fragment, useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryGrid from "./GalleryGrid";
import Pagination from "../../components/Pagination";
import GalleryCreateModal from "./GalleryCreateModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  dataDelete,
  getDatas,
  getGalleryCategories,
  getGalleryImageInfo,
  updateData,
} from "../apiCalling/action";
import ImageInfoDrawer from "./ImageInfoDrawer";
import SpinnerLoading from "./SpinnerLoading";

export default function GalleryTable({
  sideBar,
  openModal,
  setOpenModal,
  page,
  setPage,
  limit,
  totalPage,
  setTotalPage,
  selectItemId,
  search,
  ids,
  setIds,
  loading,
  setLoading,
}: any) {
  const form = useRef();
  const image_name = useRef();
  const gallery_category_id = useRef();
  const image = useRef();
  const dispatch = useDispatch();

  const [imageNameError, setImageNameError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getGalleryCategories());
    dispatch(
      getDatas(page, limit, setTotalPage, selectItemId, search, setLoading)
    );
    console.clear();
  }, []);
  const galleryCategories = useSelector((state) => state.gallery_categories);
  const galleries = useSelector((state) => state.galleries);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    dispatch(
      getDatas(
        selected + 1,
        limit,
        setTotalPage,
        selectItemId,
        search,
        setLoading
      )
    );
  };
  const handleSave = () => {
    const formData = new FormData();
    formData.append("image_name", image_name.current.value);
    formData.append("gallery_category_id", gallery_category_id.current.value);
    formData.append("image", image.current.files[0]);
    dispatch(
      addData(
        formData,
        setOpenModal,
        form,
        setImagePreviewUrl,
        page,
        limit,
        setTotalPage,
        selectItemId,
        search,
        setLoading,
        setImageError,
        setImageNameError
      )
    );
  };

  // image file read and show this upload image file
  const imageHandle = (e) => {
    setImageError(false);
    if (e.target && e.target.files.length > 0) {
      const file = e.target.files[0];
      previewFile(file);
    }
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImagePreviewUrl(""); // Clear the image preview URL
    image.current.value = ""; // Clear the image input field value
  };

  const imageInfoHandler = (id) => {
    dispatch(getGalleryImageInfo(id));
    setIsOpen(true);
  };

  const updateHandler = (id) => {
    const payload = {
      image_name: image_name.current.value,
      gallery_category_id: gallery_category_id.current.value,
    };
    dispatch(
      updateData(
        id,
        payload,
        page,
        limit,
        setTotalPage,
        setIsOpen,
        selectItemId,
        search,
        setLoading
      )
    );
  };

  const deleteHandler = (id) => {
    dispatch(
      dataDelete(
        id,
        page,
        limit,
        setTotalPage,
        selectItemId,
        search,
        setLoading
      )
    );
  };

  const handleGalleryCheck = (galleryId) => {
    setIds((prevSelectedItems) => {
      if (prevSelectedItems.includes(galleryId) !== false) {
        // Unselect the item
        prevSelectedItems.includes(galleryId);
        const updatedItems = prevSelectedItems.filter((id) => id !== galleryId);
        return updatedItems;
      } else {
        // Select the item
        const updatedItems = [...prevSelectedItems, galleryId];
        return updatedItems;
      }
    });
  };

  return (
    <Fragment>
      <GalleryGrid sideBar={sideBar}>
        {galleries.length > 0 ? (
          galleries.map((gallery, index) => (
            <GalleryCard
              key={index + 1}
              gallery={gallery}
              imageInfoHandler={imageInfoHandler}
              deleteHandler={deleteHandler}
              ids={ids}
              handleGalleryCheck={handleGalleryCheck}
            />
          ))
        ) : loading === true ? (
          <div
            className={`py-5 ${
              sideBar === true
                ? "7xl:col-span-5 2xlMiddle3xl:col-span-4 2lg:col-span-3 2xs:col-span-2 col-span-1"
                : "7xl:col-span-6 2xlMiddle3xl:col-span-5 2lg:col-span-4 md:col-span-3 2xs:col-span-2 col-span-1"
            } flex justify-center backdrop-blur-sm bg-gray-100/30 rounded-lg w-full shadow-sm border`}
          >
            <SpinnerLoading color="blue-600" />
          </div>
        ) : (
          <div
            className={`py-5 ${
              sideBar === true
                ? "7xl:col-span-5 2xlMiddle3xl:col-span-4 2lg:col-span-3 2xs:col-span-2 col-span-1"
                : "7xl:col-span-6 2xlMiddle3xl:col-span-5 2lg:col-span-4 md:col-span-3 2xs:col-span-2 col-span-1"
            } flex justify-center backdrop-blur-sm bg-gray-100/30 rounded-lg w-full shadow-sm border`}
          >
            <h2 className=" text-2xl text-gray-700 font-semibold">
              Gallery not found
            </h2>
          </div>
        )}
      </GalleryGrid>

      {totalPage > 0 && (
        <div className="pt-5 flex justify-between items-center">
          <div className=" text-gray-500">
            Page {page} items {page * limit} total page {totalPage}
          </div>
          <Pagination
            handlePageClick={handlePageClick}
            page={page}
            totalPage={totalPage}
          />
        </div>
      )}

      <GalleryCreateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        galleryCategories={galleryCategories}
        image_name={image_name}
        gallery_category_id={gallery_category_id}
        image={image}
        form={form}
        handleSave={handleSave}
        imagePreviewUrl={imagePreviewUrl}
        imageHandle={imageHandle}
        removeImage={removeImage}
        imageNameError={imageNameError}
        setImageNameError={setImageNameError}
        imageError={imageError}
      />
      <ImageInfoDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        galleryCategories={galleryCategories}
        image_name={image_name}
        gallery_category_id={gallery_category_id}
        updateHandler={updateHandler}
        form={form}
      />
    </Fragment>
  );
}
