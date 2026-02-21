import React from "react";
import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATAS, GET_EDIT_DATA, GET_ERRORS } from "./actionType";

const addData = (payload, navigate) => async (dispatch) => {
   try {
      const response = await axiosClient.post(`/collection-store`, payload);
      if (response.data.status === "success") {
         successMsg(response.data.msg);
         dispatch(getErrors([]));
         navigate("/collections");
      }
   } catch (error) {
      dispatch(getErrors(error.response.data.errors));
   }
};

const getDatas =
   (
      page: number,
      limit: number,
      setTotalPage: React.Dispatch<React.SetStateAction<number>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      selectItemId: string,
      search: string,
      setPage: React.Dispatch<React.SetStateAction<number>>
   ) =>
   async (dispatch: any) => {
      const response = await axiosClient.get(
         `/admin/users-get?status=${selectItemId}&search=${search}`
      );
      let totalItemsLength = response.data.length;
      let totalPagesFromResponse = Math.ceil(totalItemsLength / limit);
      setTotalPage(totalPagesFromResponse);

      let newPage = page; // Initialize newPage with current page

      if (totalItemsLength === 0) {
         // If there are no search results, reset the page to 1
         newPage = 1;
      } else if (page > totalPagesFromResponse) {
         // If the current page exceeds total pages, reset to last page
         newPage = totalPagesFromResponse;
      }

      dispatch(getItems(newPage, limit, response.data));

      setPage(newPage); // Set the current page after changing the limit
      setLoading(false);
      dispatch({
         type: GET_EDIT_DATA,
         payload: {},
      });
      dispatch(getErrors([]));
   };

const getItems = (page: number, limit: number, items: any[]) => (dispatch) => {
   let array = [] as any[];
   for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
      array.push(items[i]);
   }
   dispatch({
      type: GET_DATAS,
      payload: array,
   });
};

const statusChange =
   (
      id: number,
      page: number,
      limit: number,
      setTotalPage: React.Dispatch<React.SetStateAction<number>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      selectItemId: string,
      search: string,
      setPage: React.Dispatch<React.SetStateAction<number>>
   ) =>
   async (dispatch) => {
      const response = await axiosClient.get(`/admin/user-permission/${id}`);
      if (response.statusText === "OK") {
         successMsg(response.data.msg);
         dispatch(
            getDatas(
               page,
               limit,
               setTotalPage,
               setLoading,
               selectItemId,
               search,
               setPage
            )
         );
      }
   };

const getData = (id: number) => async (dispatch: any) => {
   try {
      const response = await axiosClient.get(`/admin/user-edit/${id}`);
      dispatch({
         type: GET_EDIT_DATA,
         payload: response.data,
      });
      dispatch(getErrors({}));
   } catch (error: any) {
      dispatch(getErrors(error.response.data.message));
   }
};

const updateData =
   (id: number, formData: FormData, navigate: any) => async (dispatch) => {
      try {
         const response = await axiosClient.post(
            `/admin/user-update/${id}`,
            formData
         );
         if (response.statusText === "OK") {
            successMsg(response.data.msg);
            dispatch({
               type: GET_EDIT_DATA,
               payload: {},
            });
            dispatch(getErrors([]));
            navigate("/users");
         }
      } catch (error) {
         dispatch(getErrors(error.response.data.errors));
      }
   };

const dataDelete =
   (
      id: number,
      page: number,
      limit: number,
      setTotalPage: React.Dispatch<React.SetStateAction<number>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      selectItemId: string,
      search: string,
      setPage: React.Dispatch<React.SetStateAction<number>>
   ) =>
   async (dispatch: any) => {
      const response = await axiosClient.get(`/admin/user-delete/${id}`);
      if (response.statusText === "OK") {
         successMsg(response.data.msg);
         dispatch(
            getDatas(
               page,
               limit,
               setTotalPage,
               setLoading,
               selectItemId,
               search,
               setPage
            )
         );
      }
   };

const getErrors = (errors: any) => (dispatch) => {
   dispatch({
      type: GET_ERRORS,
      payload: errors,
   });
};

export { getDatas, addData, statusChange, getData, updateData, dataDelete };
