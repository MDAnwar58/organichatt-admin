import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ColorForm from "./ColorForm";

export default function ColorCreateContent() {
  return (
    <Fragment>
      <Provider store={store}>
        <ColorForm />
      </Provider>
    </Fragment>
  );
}
