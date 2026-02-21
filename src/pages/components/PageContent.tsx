import React, { useEffect } from "react";
import LoadOrderCount from "./LoadOrderCount";
import { Provider } from "react-redux";
import store from "../apiCalling/store";

type Props = {
   children: React.ReactNode;
};

export default function PageContent({ children }: Props) {
   return (
      <Provider store={store}>
         <LoadOrderCount>
            <div
               className={`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16`}
            >
               {children}
            </div>
         </LoadOrderCount>
      </Provider>
   );
}
