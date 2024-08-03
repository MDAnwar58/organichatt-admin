import React, { Fragment } from "react";
import BannerCreateContent from "./components/BannerCreateContent";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";

export default function BannerCreate() {
  return (
    <Provider store={store}>
      <BannerCreateContent />
    </Provider>
  );
}
