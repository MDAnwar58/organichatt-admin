import { useDispatch } from "react-redux";
import {
  galleryCategoriesGet,
  galleryDelete,
  galleryRestore,
  getDatas,
  getDatasWithGalleryCategory,
  multipleGalleryRestore,
  multipleGalleryDelete,
} from "../apiCalling/action";
import { useState } from "react";
import { warningMsg } from "../../../../notify";

export default function GalleryTrustBinContext() {
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPage, setTotalPage] = useState(0);

  const [galleryCategoryId, setGalleryCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getGalleryCategories = () => {
    dispatch(galleryCategoriesGet());
  };

  const getGalleries = () => {
    dispatch(
      getDatas(page, limit, setTotalPage, galleryCategoryId, search, setLoading)
    );
  };

  const itemHandle = (gallery_category_id) => {
    setGalleryCategoryId(gallery_category_id);
    dispatch(
      getDatasWithGalleryCategory(
        page,
        limit,
        setTotalPage,
        gallery_category_id,
        search,
        setLoading
      )
    );
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        e.target.value,
        setLoading
      )
    );
  };

  const handlePageClick = (data) => {
    const pageNumber = data.selected + 1;
    setPage(pageNumber);
    dispatch(
      getDatas(
        pageNumber,
        limit,
        setTotalPage,
        galleryCategoryId,
        search,
        setLoading
      )
    );
  };

  const restoreHandler = (id) => {
    dispatch(
      galleryRestore(
        id,
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        search,
        setLoading
      )
    );
  };

  const deleteHandler = (id) => {
    dispatch(
      galleryDelete(
        id,
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
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

  const multipleRestoreHandler = () => {
    if (ids.length > 0) {
      const payload = {
        ids: ids,
      };
      dispatch(
        multipleGalleryRestore(
          payload,
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    } else {
      warningMsg("Please Select Gallery");
    }
  };

  const multipleDeleteHandler = () => {
    if (ids.length > 0) {
      const payload = {
        ids: ids,
      };
      dispatch(
        multipleGalleryDelete(
          payload,
          page,
          limit,
          setTotalPage,
          galleryCategoryId,
          search,
          setLoading
        )
      );
    } else {
      warningMsg("Please Select Gallery");
    }
  };

  const tableResetHanlder = () => {
    setPage(1);
    dispatch(getDatas(1, limit, setTotalPage, "", "", setLoading));
  };

  return {
    getGalleryCategories,
    galleryCategoryId,
    setGalleryCategoryId,
    getGalleries,
    itemHandle,
    searchHandler,
    page,
    limit,
    totalPage,
    handlePageClick,
    loading,
    restoreHandler,
    deleteHandler,
    multipleRestoreHandler,
    ids,
    handleGalleryCheck,
    multipleDeleteHandler,
    tableResetHanlder,
  };
}
