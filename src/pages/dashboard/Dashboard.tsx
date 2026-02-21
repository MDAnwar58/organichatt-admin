import React, { useEffect } from "react";
import Metadata from "../components/Metadata";
import PageContent from "../components/PageContent";
import DashboardContent from "./Components/DashboardContent";
import { Provider, useDispatch } from "react-redux";
import { getDashboardData } from "./apiCalling/action";
import store from "./apiCalling/store";

export default function Dashboard() {
   return (
      <PageContent>
         <Metadata title="Dashboard" />
         <Provider store={store}>
            <DashboardContent />
         </Provider>
      </PageContent>
   );
}
