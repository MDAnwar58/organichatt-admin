import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import WeightEditContent from "./components/WeightEditContent";

export default function WeightEdit() {
  return (
    <Provider store={store}>
      <WeightEditContent />
    </Provider>
  );
}
