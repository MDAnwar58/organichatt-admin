import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import SubCategoryPage from "./components/SubCategoryPage";
import { Helmet } from "react-helmet";

export default function SubCategory() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Sub Category</title>
      </Helmet>
      <Provider store={store}>
        <SubCategoryPage />
      </Provider>
    </PageContent>
  );
}
