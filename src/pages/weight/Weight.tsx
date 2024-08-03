import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import WeightContent from "./components/WeightContent";
import { Helmet } from "react-helmet";

export default function Weight() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Weights</title>
      </Helmet>
      <Provider store={store}>
        <WeightContent />
      </Provider>
    </PageContent>
  );
}
