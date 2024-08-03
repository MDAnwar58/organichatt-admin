import React from "react";
import { useOutletContext } from "react-router-dom";
import GalleryTrustBinContent from "./components/GalleryTrustBinContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import PageContent from "../../components/PageContent";
import { Helmet } from "react-helmet";

export default function GalleryTrustBin() {
  const { sideBar } = useOutletContext();
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Gallery Trust Bin</title>
      </Helmet>
      <PageContent>
        <GalleryTrustBinContent sideBar={sideBar} />
      </PageContent>
    </Provider>
  );
}
