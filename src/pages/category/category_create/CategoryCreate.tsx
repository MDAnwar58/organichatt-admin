import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import CategoryCreateContent from "./components/CategoryCreateContent";

export default function CategoryCreate() {
  return (
    <Provider store={store}>
      <CategoryCreateContent />
    </Provider>
  );
}
