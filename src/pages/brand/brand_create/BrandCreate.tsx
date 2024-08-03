import React, { Fragment } from "react";
import BrandCreateContent from "./components/BrandCreateContent";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";

export default function BrandCreate() {
  return (
    <Provider store={store}>
      <BrandCreateContent />
    </Provider>
  );
}
