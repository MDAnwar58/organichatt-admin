import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { GET_ERRORS } from "./actionType";

const addData = (formData: FormData, navigate: any) => async (dispatch) => {
   try {
      const response = await axiosClient.post(`/admin/user-store`, formData);
      if (response.statusText === "OK") {
         successMsg(response.data.msg);
         dispatch({
            type: GET_ERRORS,
            payload: [],
         });
         navigate("/users");
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
export { addData };
