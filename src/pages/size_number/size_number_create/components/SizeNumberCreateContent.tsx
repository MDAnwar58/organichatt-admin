import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import SizeForm from "./SizeNumberForm";

export default function SizeNumberCreateContent() {
  return (
    <Fragment>
      <Provider store={store}>
        <SizeForm />
      </Provider>
    </Fragment>
  );
}
