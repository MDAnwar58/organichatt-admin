import { GET_DATAS, GET_ERRORS, GET_GALLERY_CATEGORY } from "./actionType";

const initialState = {
  galleryCategories: [],
  galleries: [],
  galleryErrors: [],
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
