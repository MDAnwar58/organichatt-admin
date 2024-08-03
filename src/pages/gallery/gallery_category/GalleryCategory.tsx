import React from "react";
import { useState } from "react";
import GalleryCategoryTable from "./components/GalleryCategoryTable";
import GalleryCategoryTableHeader from "./components/GalleryCategoryTableHeader";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import PageContent from "../../components/PageContent";
import { Helmet } from "react-helmet";

export default function GalleryCategory() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Gallery Categories</title>
      </Helmet>
      <PageContent>
        <GalleryCategoryTableHeader setOpenModal={setOpenModal} />
        <GalleryCategoryTable
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </PageContent>
    </Provider>
  );
}
