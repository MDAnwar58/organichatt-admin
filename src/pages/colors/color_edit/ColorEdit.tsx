import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import ColorEditContent from "./components/ColorEditContent";

export default function ColorEdit() {
  return (
    <Provider store={store}>
      <ColorEditContent />
    </Provider>
  );
}
