import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATA, GET_ERRORS } from "./actionType";

const getData = () => async (dispatch) => {
   try {
      const response = await axiosClient.get(`/admin/privacy-policy-get`);

      dispatch({
         type: GET_DATA,
         payload: response.data,
      });
      dispatch(getErrors({}));
   } catch (error) {
      dispatch(getErrors(error?.response.data.errors));
   }
};

const addData = (payload, navigate) => async (dispatch) => {
   try {
      const response = await axiosClient.post(`/collection-store`, payload);
      if (response.data.status === "success") {
         successMsg(response.data.msg);
         dispatch({
            type: GET_ERRORS,
            payload: [],
         });
         navigate("/collections");
      }
   } catch (error) {
      dispatch(getErrors(error.response.data.errors));
   }
};

const getErrors = (errors) => (dispatch) => {
   dispatch({
      type: GET_ERRORS,
      payload: errors,
   });
};
export { getData, addData };
