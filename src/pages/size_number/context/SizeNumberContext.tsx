import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataDelete, getDatas, statusChange } from "../apiCalling/action";

export default function useSizeNumberContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const getSizeNumbers = () => {
    dispatch(getDatas(page, limit, setTotalPage, setLoading, search, setPage));
  };

  const onPageHabdle = (data) => {
    setPage(data.selected + 1);
    dispatch(
      getDatas(
        data.selected + 1,
        limit,
        setTotalPage,
        setLoading,
        search,
        setPage
      )
    );
  };

  const pageItemLimitHandler = (e) => {
    setLimit(e.target.value);
    dispatch(
      getDatas(page, e.target.value, setTotalPage, setLoading, search, setPage)
    );
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
    dispatch(
      getDatas(page, limit, setTotalPage, setLoading, e.target.value, setPage)
    );
  };

  const deleteHandle = (id) => {
    dispatch(
      dataDelete(id, page, limit, setTotalPage, setLoading, search, setPage)
    );
  };

  return {
    getSizeNumbers,
    page,
    limit,
    totalPage,
    length,
    onPageHabdle,
    pageItemLimitHandler,
    loading,
    searchHandle,
    deleteHandle,
  };
}
