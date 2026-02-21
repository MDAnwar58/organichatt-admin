import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import PrivacyPolicyForm from "./components/PrivacyPolicyForm";
import store from "./apiCalling/store";

export default function PrivacyPolicy() {
   return (
      <PageContent>
         <Provider store={store}>
            <PrivacyPolicyForm />
         </Provider>
      </PageContent>
   );
}
