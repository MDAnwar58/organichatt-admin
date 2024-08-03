import React, { useEffect } from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import ProductPage from "./components/ProductPage";
import store from "../apiCalling/store";

export default function SubCategory() {
  useEffect(() => {
    console.clear();
  }, []);
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Products</title>
      </Helmet>
      <Provider store={store}>
        <ProductPage />
      </Provider>
    </PageContent>
  );
}
