import React from "react";
import PageContent from "../components/PageContent";
import CategoryPage from "./components/CategoryPage";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import { Helmet } from "react-helmet";

export default function Category() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Category</title>
      </Helmet>
      <Provider store={store}>
        <CategoryPage />
      </Provider>
    </PageContent>
  );
}
