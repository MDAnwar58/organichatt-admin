import React from "react";
import PageContent from "../components/PageContent";
import OfferContent from "./components/OfferContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import { Helmet } from "react-helmet";

export default function Offer() {
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Offers</title>
      </Helmet>
      <Provider store={store}>
        <OfferContent />
      </Provider>
    </PageContent>
  );
}
