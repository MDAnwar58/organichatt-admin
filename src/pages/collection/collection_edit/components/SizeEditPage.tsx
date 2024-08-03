import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../../apiCalling/store";
import SizeEditContent from "./SizeEditContent";

export default function SizeEditPage() {
  return (
    <Provider store={store}>
      <SizeEditContent />
    </Provider>
  );
}
