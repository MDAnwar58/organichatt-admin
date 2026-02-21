import { GET_DATAS, GET_ERRORS } from "./actionType";

const initialState = {
   reviews: [],
   errors: [],
};

const dataReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DATAS:
         return {
            ...state,
            reviews: action.payload,
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
