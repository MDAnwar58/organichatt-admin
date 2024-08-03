import { errors } from "../../brand/brand_create/apiCalling/action";
import {
  GET_DATA,
  GET_DATAS,
  GET_ERRORS,
  GET_GALLERY_CATEGORIES,
} from "./actionType";

const initialState = {
  gallery_categories: [],
  galleries: [],
  gallery: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_CATEGORIES:
      return {
        ...state,
        gallery_categories: action.payload,
      };
    case GET_DATAS:
      return {
        ...state,
        galleries: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        gallery: action.payload,
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
