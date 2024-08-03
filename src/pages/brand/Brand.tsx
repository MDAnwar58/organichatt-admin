import React from "react";
import PageContent from "../components/PageContent";
import BrandContent from "./components/BrandContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import { Helmet } from "react-helmet";

export default function Brand() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Brands</title>
      </Helmet>
      <Provider store={store}>
        <BrandContent />
      </Provider>
    </PageContent>
  );
}
