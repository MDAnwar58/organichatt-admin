import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import CategoryEditPage from "./components/CategoryEditPage";

export default function CategoryEdit() {
  return (
    <Provider store={store}>
      <CategoryEditPage />
    </Provider>
  );
}
