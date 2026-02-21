import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_INVOICE } from "../Invoice/actionType";
import { GET_DATAS, GET_ERRORS } from "./actionType";

const getDatas =
   (
      page: number,
      limit: number,
      setTotalPage: any,
      setLoading: any,
      selectItemId: any,
      search: string,
      setPage: any
   ) =>
   async (dispatch) => {
      const response = await axiosClient.get(
         `/admin/orders-get?status=${selectItemId}&search=${search}`
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
         type: GET_INVOICE,
         payload: {},
      });
      dispatch(getErrors([]));
   };

const getItems = (page, limit, items) => (dispatch) => {
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
      setTotalPage: any,
      setLoading: any,
      selectItemId: any,
      search: string,
      setPage: any
   ) =>
   async (dispatch) => {
      const response = await axiosClient.get(
         `/admin/change-order-status/${id}`
      );
      if (response.status === 200) {
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
      const response = await axiosClient.get(`/admin/invoice/${id}`);
      dispatch({
         type: GET_INVOICE,
         payload: response.data,
      });
      dispatch(getErrors({}));
   } catch (error) {
      dispatch(getErrors(error?.response.data.message));
   }
};

const dataDelete =
   (
      id: number,
      page: number,
      limit: number,
      setTotalPage: any,
      setLoading: any,
      selectItemId: any,
      search: string,
      setPage: any
   ) =>
   async (dispatch: any) => {
      const response = await axiosClient.get(`/admin/order-delete/${id}`);
      console.log(response.statusText);
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

const getErrors = (errors) => (dispatch) => {
   dispatch({
      type: GET_ERRORS,
      payload: errors,
   });
};

export { getDatas, statusChange, getData, dataDelete };
