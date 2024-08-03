import React from "react";
import PageContent from "../components/PageContent";
import CollectionContent from "./components/CollectionContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import { Helmet } from "react-helmet";

export default function Collection() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Collection</title>
      </Helmet>
      <Provider store={store}>
        <CollectionContent />
      </Provider>
    </PageContent>
  );
}
