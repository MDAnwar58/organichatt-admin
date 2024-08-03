import React from "react";
import PageContent from "../components/PageContent";
import BannerContent from "./components/BannerContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import { Helmet } from "react-helmet";

export default function Banner() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Banners</title>
      </Helmet>
      <Provider store={store}>
        <BannerContent />
      </Provider>
    </PageContent>
  );
}
