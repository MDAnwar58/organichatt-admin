import React from "react";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import UserCreateForm from "./components/UserCreateForm";

export default function UserCreate() {
   return (
      <Provider store={store}>
         <UserCreateForm />
      </Provider>
   );
}
