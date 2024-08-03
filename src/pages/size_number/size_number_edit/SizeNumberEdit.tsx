import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SizeNumberEditPage from "./components/SizeNumberEditPage";

export default function SizeNumberEdit() {
  return (
    <Provider store={store}>
      <SizeNumberEditPage />
    </Provider>
  );
}
