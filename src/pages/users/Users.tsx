import React from "react";
import PageContent from "../components/PageContent";
import Metadata from "../components/Metadata";
import UsersContent from "./components/UsersContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";

export default function Users() {
   return (
      <PageContent>
         <Metadata title="Users" />
         <Provider store={store}>
            <UsersContent />
         </Provider>
      </PageContent>
   );
}
