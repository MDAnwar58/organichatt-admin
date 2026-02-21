import { GET_INVOICE } from "../Invoice/actionType";
import { GET_DATAS, GET_ERRORS } from "./actionType";

const initialState = {
   orders: [],
   invoice: {},
   seller: {},
   errors: [],
};

const dataReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DATAS:
         return {
            ...state,
            orders: action.payload,
         };
      case GET_INVOICE:
         return {
            ...state,
            invoice: action.payload.invoice,
            seller: action.payload.seller,
         };
      case GET_ERRORS:
         return {
            ...state,
            errors: action.payload,
         };
      default:
         return state;
   }
};

export default dataReducer;
