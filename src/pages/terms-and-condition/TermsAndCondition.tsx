import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import TermsAndConditionForm from "./components/TermsAndConditionForm";
import store from "./apiCalling/store";

export default function TermsAndCondition() {
   return (
      <PageContent>
         <Provider store={store}>
            <TermsAndConditionForm />
         </Provider>
      </PageContent>
   );
}
