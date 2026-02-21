import { GET_DATA, GET_ERRORS } from "./actionType";

const initialState = {
   privacy_policy: {},
   errors: [],
};

const dataReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DATA:
         return {
            ...state,
            privacy_policy: action.payload,
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
