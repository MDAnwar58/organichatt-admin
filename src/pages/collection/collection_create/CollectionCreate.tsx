import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import CollectionCreateContent from "./components/CollectionCreateContent";
import CollectionForm from "./components/CollectionForm";

export default function CollectionCreate() {
  return (
    <Provider store={store}>
      <CollectionForm />
    </Provider>
  );
}
