import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  bannerImageStoreOrUpdate,
  dataDelete,
  dataSorting,
  getDatas,
  statusChange,
} from "../apiCalling/action";

export default function useSubCategoryContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("desc");
  const [sortByDir, setSortByDir] = useState("");

  const banner_url = useRef();

  const dispatch = useDispatch();

  const getSubCategories = () => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength,
        sortByDir,
        sortBy
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
        setPage,
        setLength,
        sortByDir,
        sortBy
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
        setPage,
        setLength,
        sortByDir,
        sortBy
      )
    );
  };

  const itemHandle = (id) => {
    setSelectItemId(id);
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        id,
        search,
        setPage,
        setLength,
        sortByDir,
        sortBy
      )
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
        setPage,
        setLength,
        sortByDir,
        sortBy
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
        setPage,
        setLength,
        sortByDir,
        sortBy
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
        setPage,
        setLength,
        sortByDir,
        sortBy
      )
    );
  };

  const sortByHandle = (sort, dir) => {
    setSortByDir(dir);
    if (sort === "desc") {
      setSortBy("asc");
      dispatch(
        dataSorting(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          setLength,
          dir,
          "asc"
        )
      );
    } else {
      setSortBy("desc");
      dispatch(
        dataSorting(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          setLength,
          dir,
          "desc"
        )
      );
    }
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
        setPage,
        setLength,
        sortByDir,
        sortBy
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
        setPage,
        setLength,
        sortByDir,
        sortBy
      )
    );
  };

  return {
    getSubCategories,
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
    sortBy,
    sortByHandle,
    sortByDir,
    banner_url,
    addBanner,
    removeBanner,
  };
}
