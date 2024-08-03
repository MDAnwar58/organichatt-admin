import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import dataReducer from "./dataReducer";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
