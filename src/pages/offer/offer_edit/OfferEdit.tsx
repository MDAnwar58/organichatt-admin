import React, { Fragment } from "react";
import { Provider } from "react-redux";
import OfferEditPage from "./components/OfferEditPage";
import store from "../../apiCalling/store";

export default function OfferEdit() {
  return (
    <Provider store={store}>
      <OfferEditPage />
    </Provider>
  );
}
