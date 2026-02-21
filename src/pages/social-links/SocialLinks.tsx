import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import SocialLinksForm from "./components/SocialLinksForm";
import store from "./apiCalling/store";

export default function SocialLinks() {
   return (
      <PageContent>
         <Provider store={store}>
            <SocialLinksForm />
         </Provider>
      </PageContent>
   );
}
