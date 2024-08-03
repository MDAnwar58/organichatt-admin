import React, { useState } from "react";
import GalleryTable from "./components/GalleryTable";
import GalleryTableHeader from "./components/GalleryTableHeader";
import { useOutletContext } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import { Helmet } from "react-helmet";
import PageContent from "../components/PageContent";

export default function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPage, setTotalPage] = useState(0);
  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [ids, setIds] = useState([]);
  const { sideBar } = useOutletContext();

  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Galleries</title>
      </Helmet>
      <PageContent>
        <GalleryTableHeader
          sideBar={sideBar}
          setOpenModal={setOpenModal}
          selectItemId={selectItemId}
          setSelectItemId={setSelectItemId}
          page={page}
          limit={limit}
          setTotalPage={setTotalPage}
          search={search}
          setSearch={setSearch}
          setPage={setPage}
          ids={ids}
          setLoading={setLoading}
        />
        <GalleryTable
          sideBar={sideBar}
          openModal={openModal}
          setOpenModal={setOpenModal}
          page={page}
          limit={limit}
          totalPage={totalPage}
          setPage={setPage}
          setTotalPage={setTotalPage}
          selectItemId={selectItemId}
          search={search}
          ids={ids}
          setIds={setIds}
          loading={loading}
          setLoading={setLoading}
        />
      </PageContent>
    </Provider>
  );
}
