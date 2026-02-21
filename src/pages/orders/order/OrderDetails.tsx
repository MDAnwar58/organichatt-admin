import React from "react";
import OrderDetailsContent from "./Components/OrderDetailsContent";
import PageContent from "../../components/PageContent";
import Metadata from "../../components/Metadata";
import { Provider } from "react-redux";
import store from "../apiCalling/store";

export default function OrderDetails() {
   return (
      <PageContent>
         <Metadata title="Order Details" />{" "}
         <Provider store={store}>
            <OrderDetailsContent />
         </Provider>
      </PageContent>
   );
}
