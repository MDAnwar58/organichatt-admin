import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import SizeContent from "./components/SizeContent";
import { Helmet } from "react-helmet";

export default function Size() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Sizes</title>
      </Helmet>
      <Provider store={store}>
        <SizeContent />
      </Provider>
    </PageContent>
  );
}
