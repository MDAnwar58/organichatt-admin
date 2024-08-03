import { EDIT_DATA, ERROR, GET_DATA } from "./actionType";

const initialState = {
  items: [],
  item: {},
  errors: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        items: action.payload,
      };
    case EDIT_DATA:
      return {
        ...state,
        item: action.payload,
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
