import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  getGalleryCategoryDatas,
  getGalleryDatas,
} from "../apiCalling/action";
import { useLocation } from "react-router-dom";

export default function useGalleryContext() {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [galleryCategoryId, setGalleryCategoryId] = useState("");
  const [search, setSearch] = useState("");

  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const image_name = useRef();
  const image = useRef();
  const galleryAddForm = useRef();

  const imageGalleryCategoryId = useRef();
  // const galleryCategoryName =
  //   pathname === "/admin/brand-create"
  //     ? "Brand"
  //     : pathname === "/admin/banner-create"
  //     ? "Banner"
  //     : "";
  // const [gallery_category_name] = useState(galleryCategoryName);
  const [gallery_category_name] = useState("");

  const dispatch = useDispatch();
  const [tab, setTab] = useState("gallery");
  const [imageNameError, setImageNameError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [galleryId, setGalleryId] = useState(null);
  const [galleryImage, setGalleryImage] = useState({
    imageType: "",
    url: "",
  });
  const [galleryImages, setGalleryImages] = useState([]);

  const getGalleryCategories = () => {
    dispatch(getGalleryCategoryDatas());
  };

  const getGalleries = () => {
    dispatch(
      getGalleryDatas(page, limit, setTotalPage, galleryCategoryId, search)
    );
  };

  const itemHandle = (id) => {
    setGalleryCategoryId(id);
    dispatch(getGalleryDatas(page, limit, setTotalPage, id, search));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    dispatch(
      getGalleryDatas(
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        e.target.value
      )
    );
  };

  const paginate = (btn, num) => {
    if (btn === "previews") {
      if (num > 0) {
        setPage(num);
        dispatch(
          getGalleryDatas(num, limit, setTotalPage, galleryCategoryId, search)
        );
      }
    } else {
      if (page !== totalPage) {
        setPage(num);
        dispatch(
          getGalleryDatas(num, limit, setTotalPage, galleryCategoryId, search)
        );
      }
    }
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
  };

  const addGallery = () => {
    const formData = new FormData();
    formData.append("image_name", image_name.current.value);
    formData.append("image", image.current.files[0]);
    dispatch(
      addData(
        formData,
        imageGalleryCategoryId.current.value,
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        search,
        galleryAddForm,
        setImagePreviewUrl,
        setTab,
        setImageNameError,
        setImageError
      )
    );
  };

  const openGalleryModalHandler = (imageType) => {
    setOpenGalleryModal(true);
    setGalleryImage({
      imageType: imageType,
      url: "",
    });
  };

  const selectGalleryImage = (id, url) => {
    setGalleryId(id);
    setGalleryImage({
      imageType: galleryImage.imageType,
      url: url,
    });
  };

  // multiple image file set here and with remove function start
  const selectGalleryImages = (id, url) => {
    setGalleryImages((prevImages) => {
      const isAlreadySelected = prevImages.some(
        (image) => image.galleryId === id
      );

      if (isAlreadySelected) {
        return prevImages.filter((image) => image.galleryId !== id);
      } else {
        return [
          ...prevImages,
          {
            galleryId: id,
            url: url,
          },
        ];
      }
    });
  };
  const galleryImageRemoveHandle = (id) => {
    setGalleryImages((prevImages) => {
      return prevImages.filter((image) => image.galleryId !== id);
    });
  };
  // multiple image file set here and with remove function start

  const removeFile = () => {
    setGalleryId(null);
    setGalleryImage({
      imageType: "",
      url: "",
    });
  };

  return {
    getGalleryCategories,
    getGalleries,
    openGalleryModal,
    setOpenGalleryModal,
    page,
    setPage,
    limit,
    totalPage,
    setTotalPage,
    setGalleryCategoryId,
    galleryCategoryId,
    itemHandle,
    searchHandler,
    paginate,
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
    setImageError,
    galleryId,
    setGalleryId,
    galleryImage,
    setGalleryImage,
    selectGalleryImage,
    selectGalleryImages,
    galleryImages,
    setGalleryImages,
    galleryImageRemoveHandle,
    openGalleryModalHandler,
    removeFile,
  };
}
