import {
  GET_DATAS,
  GET_CATEGORIES,
  GET_EDIT_DATA,
  GET_SUBMIT_ERRORS,
  GET_COLLECTIONS,
  GET_BRANDS,
  GET_SUB_CATEGORIES,
  GET_COLORS,
  GET_SIZES,
  GET_SIZE_NUMBERS,
  GET_WEIGHTS,
  GET_PRODUCT_IMAGES_DATA,
} from "./actionType";

const initialState = {
  products: [],
  product: {},
  collections: [],
  brands: [],
  categories: [],
  sub_categories: [],
  colors: [],
  sizes: [],
  size_numbers: [],
  weights: [],
  product_images: [],
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        product: action.payload,
      };
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_SUB_CATEGORIES:
      return {
        ...state,
        sub_categories: action.payload,
      };
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    case GET_SIZES:
      return {
        ...state,
        sizes: action.payload,
      };
    case GET_SIZE_NUMBERS:
      return {
        ...state,
        size_numbers: action.payload,
      };
    case GET_WEIGHTS:
      return {
        ...state,
        weights: action.payload,
      };
    case GET_PRODUCT_IMAGES_DATA:
      return {
        ...state,
        product_images: action.payload,
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
