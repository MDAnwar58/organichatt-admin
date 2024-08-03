import React, { Fragment } from "react";
import { Provider } from "react-redux";
import BrandEditPage from "./components/BrandEditPage";
import store from "../../apiCalling/store";

export default function BrandEdit() {
  return (
    <Provider store={store}>
      <BrandEditPage />
    </Provider>
  );
}
