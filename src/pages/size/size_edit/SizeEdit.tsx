import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SizeEditPage from "./components/SizeEditPage";

export default function SizeEdit() {
  return (
    <Provider store={store}>
      <SizeEditPage />
    </Provider>
  );
}
