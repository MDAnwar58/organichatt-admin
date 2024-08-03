import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import SizeForm from "./components/SizeForm";

export default function SizeCreate() {
  return (
    <Provider store={store}>
      <SizeForm />
    </Provider>
  );
}
