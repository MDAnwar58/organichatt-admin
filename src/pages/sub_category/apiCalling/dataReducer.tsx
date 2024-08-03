import {
  GET_DATAS,
  GET_CATEGORIES,
  GET_EDIT_DATA,
  GET_SUBMIT_ERRORS,
} from "./actionType";

const initialState = {
  sub_categories: [],
  sub_category: {},
  categories: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        sub_categories: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        sub_category: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_SUBMIT_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
