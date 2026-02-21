import { GET_DASHBOARD_DATAS } from "./actionType";

export interface DashboardState {
   delivery_orders_count: number;
   eymploee_count: number;
   sales_items_count: number;
   users_count: number;
   monthly_revenue: any[];
   errors: any[];
}

const initialState: DashboardState = {
   delivery_orders_count: 0,
   eymploee_count: 0,
   sales_items_count: 0,
   users_count: 0,
   monthly_revenue: [],
   errors: [],
};

const dashboardReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DASHBOARD_DATAS:
         return {
            ...state,
            delivery_orders_count: action.payload.delivery_orders_count,
            eymploee_count: action.payload.eymploee_count,
            sales_items_count: action.payload.sales_items_count,
            users_count: action.payload.users_count,
            monthly_revenue: action.payload.monthly_revenue,
         };
      default:
         return state;
   }
};

export default dashboardReducer;
