import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SubCategoryCreateContent from "./components/SubCategoryCreateContent";

export default function SubCategoryCreate() {
  return (
    <Provider store={store}>
      <SubCategoryCreateContent />
    </Provider>
  );
}
