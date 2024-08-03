import React from "react";
import OfferCreateContent from "./components/OfferCreateContent";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";

export default function OfferCreate() {
  return (
    <Provider store={store}>
      <OfferCreateContent />
    </Provider>
  );
}
