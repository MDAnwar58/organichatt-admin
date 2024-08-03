import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ColorCreateContent from "./components/ColorCreateContent";

export default function ColorCreate() {
  return (
    <Provider store={store}>
      <ColorCreateContent />
    </Provider>
  );
}
