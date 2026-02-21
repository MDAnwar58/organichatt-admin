import React from "react";
import PageContent from "../components/PageContent";
import Metadata from "../components/Metadata";
import ReviewContent from "./Components/ReviewContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";

export default function Reviews() {
   return (
      <PageContent>
         <Metadata title="Reviews" />
         <Provider store={store}>
            <ReviewContent />
         </Provider>
      </PageContent>
   );
}
