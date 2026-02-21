import { GET_ERRORS } from "./actionType";

const initialState = {
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
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
