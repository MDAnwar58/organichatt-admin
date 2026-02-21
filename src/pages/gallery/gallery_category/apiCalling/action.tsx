import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { EDIT_DATA, ERROR, GET_DATA } from "./actionType";

const addData =
   (payload, form, addModal, page, limit, setTotalPage, setLoading) =>
   async (dispatch) => {
      try {
         const response = await axiosClient.post(
            "/gallery-category-store",
            payload
         );
         if (response.data.status === "success") {
            successMsg(response.data.msg);
            form.current.reset();
            dispatch(getDatas(page, limit, setTotalPage, setLoading));
            addModal(false);
         }
      } catch (error) {
         // console.log(error.response.data.errors);
         dispatch(Errors(error.response.data.errors));
      }
   };

const getDatas =
   (page, limit, setTotalPage, setLoading) => async (dispatch) => {
      const response = await axiosClient.get("/gallery-categories-get");
      dispatch(getItems(page, limit, response.data.data));
      setTotalPage(Math.ceil(response.data.data.length / limit));
      setLoading(false);
   };

const getItems = (page, limit, items: any[]) => (dispatch) => {
   let array = [] as any[];
   for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
      array.push(items[i]);
   }
   dispatch({
      type: GET_DATA,
      payload: array,
   });
};

const getData = (id) => async (dispatch) => {
   const response = await axiosClient.get(`/gallery-category-edit/${id}`);
   dispatch({
      type: EDIT_DATA,
      payload: id === null ? {} : response.data.data,
   });
};

const updateData =
   (
      id,
      payload,
      setOpenEditModal,
      page,
      limit,
      setTotalPage,
      galleryCategoryUpdateForm,
      setLoading
   ) =>
   async (dispatch) => {
      try {
         const response = await axiosClient.post(
            `/gallery-category-update/${id}`,
            payload
         );
         if (response.data.status) {
            successMsg(response.data.msg);
            dispatch(getDatas(page, limit, setTotalPage, setLoading));
            galleryCategoryUpdateForm.current.reset();
            dispatch(getData(null));
            setOpenEditModal(false);
         }
      } catch (error) {
         dispatch(Errors(error.response.data.errors));
      }
   };

const deleteData =
   (id, page, limit, setTotalPage, setLoading) => async (dispatch) => {
      const response = await axiosClient.get(`/gallery-category-delete/${id}`);
      if (response.data.status === "success") {
         successMsg(response.data.msg);
         dispatch(getDatas(page, limit, setTotalPage, setLoading));
      }
   };

const Errors = (errors) => ({
   type: ERROR,
   payload: errors === null ? {} : errors,
});

export { addData, Errors, getDatas, getData, updateData, deleteData };
