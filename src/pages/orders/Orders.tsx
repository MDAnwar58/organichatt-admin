import React from "react";
import PageContent from "../components/PageContent";
import store from "./apiCalling/store";
import { Provider } from "react-redux";
import OrdersContent from "./components/OrdersContent";
import Metadata from "../components/Metadata";

export default function Orders() {
   return (
      <PageContent>
         <Metadata title="Orders" />
         <Provider store={store}>
            <OrdersContent />
         </Provider>
      </PageContent>
   );
}
