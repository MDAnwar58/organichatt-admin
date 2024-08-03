import {
  GET_BRANDS,
  GET_CATEGORY_DATAS,
  GET_DATAS,
  GET_EDIT_DATA,
  GET_ERRORS,
  GET_PRODUCT_DATAS,
  GET_SUB_CATEGORY_DATAS,
} from "./actionType";

const initialState = {
  offers: [],
  brands: [],
  categories: [],
  sub_categories: [],
  products: [],
  offer: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    case GET_CATEGORY_DATAS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_SUB_CATEGORY_DATAS:
      return {
        ...state,
        sub_categories: action.payload,
      };
    case GET_PRODUCT_DATAS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DATAS:
      return {
        ...state,
        offers: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        offer: action.payload,
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
