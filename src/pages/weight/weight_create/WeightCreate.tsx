import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import WeightForm from "./components/WeightForm";

export default function WeightCreate() {
  return (
    <Provider store={store}>
      <WeightForm />
    </Provider>
  );
}
