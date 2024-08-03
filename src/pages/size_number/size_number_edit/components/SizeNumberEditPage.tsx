import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SizeNumberEditContent from "./SizeNumberEditContent";

export default function SizeNumberEditPage() {
  return (
    <Provider store={store}>
      <SizeNumberEditContent />
    </Provider>
  );
}
