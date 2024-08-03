import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataDelete, getDatas, statusChange } from "../apiCalling/action";

export default function useBrandContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");

  const getBrands = () => {
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

  return {
    getBrands,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
  };
}
