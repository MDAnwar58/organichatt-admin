import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  bannerImageStoreOrUpdate,
  dataDelete,
  getDatas,
  iconImageStoreOrUpdate,
  statusChange,
} from "../apiCalling/action";

export default function useCategoryContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");

  const icon_image_url = useRef();
  const banner_url = useRef();

  const getCategories = () => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const onPageHabdle = (data) => {
    setPage(data.selected + 1);
    dispatch(
      getDatas(
        data.selected + 1,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const pageItemLimitHandler = (e) => {
    setLimit(e.target.value);
    dispatch(
      getDatas(
        page,
        e.target.value,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const itemHandle = (id) => {
    setSelectItemId(id);
    dispatch(
      getDatas(page, limit, setTotalPage, setLoading, id, search, setPage)
    );
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        e.target.value,
        setPage
      )
    );
  };

  const statusHandle = (id) => {
    dispatch(
      statusChange(
        id,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const deleteHandle = (id) => {
    dispatch(
      dataDelete(
        id,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const addIcon = (id, setGalleryImage, setGalleryId) => {
    const payload = {
      icon_image_url: icon_image_url.current.value,
    };
    dispatch(
      iconImageStoreOrUpdate(
        id,
        payload,
        setGalleryImage,
        setGalleryId,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const removeIcon = (id, setGalleryImage, setGalleryId) => {
    const payload = {
      icon_image_url: "",
    };
    dispatch(
      iconImageStoreOrUpdate(
        id,
        payload,
        setGalleryImage,
        setGalleryId,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const addBanner = (id, setGalleryImage, setGalleryId) => {
    const payload = {
      banner_url: banner_url.current.value,
    };
    dispatch(
      bannerImageStoreOrUpdate(
        id,
        payload,
        setGalleryImage,
        setGalleryId,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  const removeBanner = (id, setGalleryImage, setGalleryId) => {
    const payload = {
      banner_url: "",
    };
    dispatch(
      bannerImageStoreOrUpdate(
        id,
        payload,
        setGalleryImage,
        setGalleryId,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage
      )
    );
  };

  return {
    getCategories,
    page,
    limit,
    totalPage,
    length,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
    icon_image_url,
    banner_url,
    addBanner,
    removeBanner,
    addIcon,
    removeIcon,
  };
}
