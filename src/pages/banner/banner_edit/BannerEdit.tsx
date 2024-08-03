import React, { Fragment } from "react";
import { Provider } from "react-redux";
import BannerEditPage from "./components/BannerEditPage";
import store from "../../apiCalling/store";

export default function BannerEdit() {
  return (
    <Provider store={store}>
      <BannerEditPage />
    </Provider>
  );
}
