import {
   GET_DATAS,
   GET_ERRORS,
   GET_GALLERY_CATEGORY,
   GET_IS_READ_REVIEW_COUNT,
   GET_ORDER_COUNT,
} from "./actionType";

const initialState = {
   galleryCategories: [],
   galleries: [],
   galleryErrors: [],
   orderCount: 0,
   isReadReviewCount: 0,
};

const dataReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_GALLERY_CATEGORY:
         return {
            ...state,
            galleryCategories: action.payload,
         };
      case GET_DATAS:
         return {
            ...state,
            galleries: action.payload,
         };
      case GET_ORDER_COUNT:
         return {
            ...state,
            orderCount: action.payload,
         };
      case GET_IS_READ_REVIEW_COUNT:
         return {
            ...state,
            isReadReviewCount: action.payload,
         };
      case GET_ERRORS:
         return {
            ...state,
            galleryErrors: action.payload,
         };
      default:
         return state;
   }
};

export default dataReducer;
