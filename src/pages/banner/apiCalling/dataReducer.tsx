import { GET_DATAS, GET_EDIT_DATA, GET_ERRORS } from "./actionType";

const initialState = {
  banners: [],
  banner: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        banners: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        banner: action.payload,
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
