import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SubCategoryEditPage from "./components/SubCategoryEditPage";

export default function CategoryEdit() {
  useEffect(() => {
    console.clear();
  }, []);
  return (
    <Provider store={store}>
      <SubCategoryEditPage />
    </Provider>
  );
}
