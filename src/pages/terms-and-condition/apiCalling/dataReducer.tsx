import { GET_DATA, GET_ERRORS } from "./actionType";

const initialState = {
   terms_and_condition: {},
   errors: [],
};

const dataReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DATA:
         return {
            ...state,
            terms_and_condition: action.payload,
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
