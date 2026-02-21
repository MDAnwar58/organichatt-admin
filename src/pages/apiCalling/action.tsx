import axiosClient from "../../axios-client";
import { successMsg } from "../../notify";
import {
   GET_DATAS,
   GET_ERRORS,
   GET_GALLERY_CATEGORY,
   GET_IS_READ_REVIEW_COUNT,
   GET_ORDER_COUNT,
} from "./actionType";

const getGalleryCategoryDatas = () => async (dispatch) => {
   const response = await axiosClient.get("/gallery-categories-get");
   // console.log(response.data.data);
   dispatch({
      type: GET_GALLERY_CATEGORY,
      payload: response.data.data,
   });
};

const getGalleryDatas =
   (page, limit, setTotalPage, galleryCategoryId, search) =>
   async (dispatch) => {
      const response = await axiosClient.get(
         `/galleries-get?gallery_category_id=${galleryCategoryId}&search=${search}`
      );
      dispatch(getGalleryItems(page, limit, response.data.data.galleries));
      setTotalPage(Math.ceil(response.data.data.galleries.length / limit));
   };

const getGalleryItems = (page, limit, items) => (dispatch) => {
   let array = [] as any[];
   for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
      array.push(items[i]);
   }
   dispatch({
      type: GET_DATAS,
      payload: array,
   });
};

const addData =
   (
      formData,
      imageGalleryCategoryId,
      page,
      limit,
      setTotalPage,
      galleryCategoryId,
      search,
      galleryAddForm,
      setImagePreviewUrl,
      setTab,
      setImageNameError,
      setImageError
   ) =>
   async (dispatch) => {
      try {
         const response = await axiosClient.post(
            `/gallery-store/${imageGalleryCategoryId}`,
            formData
         );
         if (response.data.status === "success") {
            successMsg(response.data.msg);
            dispatch(
               getGalleryDatas(
                  page,
                  limit,
                  setTotalPage,
                  galleryCategoryId,
                  search
               )
            );
            setImagePreviewUrl("");
            galleryAddForm.current.reset();
            setTab("gallery");
         }
      } catch (error) {
         // console.log(error.response.data.errors);
         dispatch(errors(error.response.data.errors));
         if (error.response.data.errors.image_name) {
            setImageNameError(true);
         }
         if (error.response.data.errors.image) {
            setImageError(true);
         }
      }
   };

export const getOrderCount = () => async (dispatch: any) => {
   const response = await axiosClient.get("/admin/orders-count");
   if (response.status === 200) {
      dispatch({
         type: GET_ORDER_COUNT,
         payload: response.data,
      });
   } else {
      console.error(response);
   }
};
export const getIsReadReviewsCount = () => async (dispatch: any) => {
   const response = await axiosClient.get("/admin/is-read-review-count");
   if (response.statusText === "OK") {
      dispatch({
         type: GET_IS_READ_REVIEW_COUNT,
         payload: response.data,
      });
   } else {
      console.error(response);
   }
};

const errors = (Errors) => (dispatch) => {
   dispatch({
      type: GET_ERRORS,
      payload: Errors,
   });
};

export { getGalleryCategoryDatas, getGalleryDatas, addData, errors };
