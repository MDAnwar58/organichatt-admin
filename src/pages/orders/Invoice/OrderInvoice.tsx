import React, { useEffect } from "react";
import { Provider } from "react-redux";
import PageContent from "../../components/PageContent";
import Metadata from "../../components/Metadata";
import InvoiceContent from "./Components/InvoiceContent";
import store from "../apiCalling/store";

export default function OrderInvoice() {
   return (
      <PageContent>
         <Metadata title="Order Invoice" />
         <Provider store={store}>
            <InvoiceContent />
         </Provider>
      </PageContent>
   );
}
