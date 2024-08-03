import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import CollectionEditContent from "./components/CollectionEditContent";

export default function SizeEdit() {
  return (
    <Provider store={store}>
      <CollectionEditContent />
    </Provider>
  );
}
