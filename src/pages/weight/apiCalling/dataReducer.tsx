import { GET_DATAS, GET_EDIT_DATA, GET_UPDATE_ERRORS } from "./actionType";

const initialState = {
  weights: [],
  weight: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        weights: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        weight: action.payload,
      };
    case GET_UPDATE_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
