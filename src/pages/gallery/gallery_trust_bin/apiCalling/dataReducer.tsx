import { GET_DATAS, GET_GALLERY_CATEGORIES } from "./actionType";

const initialState = {
  galleryCategories: [],
  galleries: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_CATEGORIES:
      return {
        ...state,
        galleryCategories: action.payload,
      };
    case GET_DATAS:
      return {
        ...state,
        galleries: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
