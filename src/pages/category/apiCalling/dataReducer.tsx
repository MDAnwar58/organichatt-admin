import { GET_DATA, GET_DATAS, GET_ERRORS } from "./actionType";

const initialState = {
  categories: [],
  category: {},
  errors: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        category: action.payload,
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
