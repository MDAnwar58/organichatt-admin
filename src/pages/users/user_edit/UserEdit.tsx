import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import UserEditForm from "./components/UserEditForm";

export default function UserEdit() {
   return (
      <Provider store={store}>
         <UserEditForm />
      </Provider>
   );
}
