import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DASHBOARD_DATAS } from "./actionType";

export const getDashboardData = () => async (dispatch) => {
   try {
      const response = await axiosClient.get("/admin/dashboard");

      dispatch({
         type: GET_DASHBOARD_DATAS,
         payload: response.data,
      });
   } catch (error) {
      console.log(error?.response.data.message);
   }
};
