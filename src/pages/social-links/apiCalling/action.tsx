import axiosClient from "../../../axios-client";
import { GET_DATAS, GET_ERRORS } from "./actionType";

const getDatas = () => async (dispatch) => {
   try {
      const response = await axiosClient.get(`/admin/social-links-get`);

      dispatch({
         type: GET_DATAS,
         payload: response.data,
      });
      dispatch(getErrors({}));
   } catch (error) {
      dispatch(getErrors(error?.response.data.errors));
   }
};
const clearDatas = () => (dispatch: any) => {
   dispatch({
      type: GET_DATAS,
      payload: [],
   });
};

const getErrors = (errors) => (dispatch) => {
   dispatch({
      type: GET_ERRORS,
      payload: errors,
   });
};
export { getDatas, clearDatas };
