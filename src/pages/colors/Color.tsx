import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import ColorContent from "./components/ColorContent";
import { Helmet } from "react-helmet";

export default function Category() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Colors</title>
      </Helmet>
      <Provider store={store}>
        <ColorContent />
      </Provider>
    </PageContent>
  );
}
