import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import SizeNumberContent from "./components/SizeNumberContent";
import { Helmet } from "react-helmet";

export default function SizeNumber() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Size Numbers</title>
      </Helmet>
      <Provider store={store}>
        <SizeNumberContent />
      </Provider>
    </PageContent>
  );
}
