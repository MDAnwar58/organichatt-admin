import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import SizeNumberForm from "./components/SizeNumberForm";

export default function SizeNumberCreate() {
  return (
    <Provider store={store}>
      <SizeNumberForm />
    </Provider>
  );
}
