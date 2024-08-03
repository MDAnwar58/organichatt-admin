import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ProductCreateContent from "./components/ProductCreateContent";
import { useOutletContext } from "react-router-dom";

export default function ProductCreate() {
  const { sideBar } = useOutletContext();

  return (
    <Provider store={store}>
      <ProductCreateContent sideBar={sideBar} />
    </Provider>
  );
}
