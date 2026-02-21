import React, { useEffect, useState } from "react";
import MonthlyRevenueChart from "./MonthlyRevenueChart";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../apiCalling/action";

export default function DashboardContent() {
   const [revenueDatas, setRevenueDatas] = useState<any[]>([]);
   const [months, setMonths] = useState<string[]>([]);
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [totalRevenue, setTotalRevenue] = useState<number>(0);

   useEffect(() => {
      dispatch(getDashboardData() as any);
   }, [dispatch]);

   const delivery_orders_count = useSelector(
      (state: any) => state.delivery_orders_count
   );
   const eymploee_count = useSelector((state: any) => state.eymploee_count);
   const sales_items_count = useSelector(
      (state: any) => state.sales_items_count
   );
   const users_count = useSelector((state: any) => state.users_count);
   const monthly_revenue = useSelector((state: any) => state.monthly_revenue);

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
         if (monthly_revenue?.length > 0) {
            const monthNames = monthly_revenue.map((data: any) => data.month);
            setMonths(monthNames);

            const ordersData = monthly_revenue.map((data: any) => {
               return {
                  x: data.month,
                  y: Number(data.revenue),
               };
            });
            setRevenueDatas(ordersData);
            setIsLoading(false);
            let total = 0;
            monthly_revenue.map((data: any) => {
               total += Number(data.revenue);
            });
            setTotalRevenue(total);
         }
      }, 1000);
   }, [monthly_revenue]);

   return (
      <main className="">
         <div className="grid grid-cols-1 3xs:grid-cols-2 ms:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4">Delivery Orders</h3>
               <p className="text-2xl font-bold">{delivery_orders_count}</p>
               <p className="text-sm text-gray-600">Total Orders</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4">Sales Items</h3>
               <p className="text-2xl font-bold">{sales_items_count}</p>
               <p className="text-sm text-gray-600">Total Order items</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4">Users</h3>
               <p className="text-2xl font-bold">{users_count}</p>
               <p className="text-sm text-gray-600">Total Users</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4">Eymploee</h3>
               <p className="text-2xl font-bold">{eymploee_count}</p>
               <p className="text-sm text-gray-600">Total Eymploees</p>
            </div>
         </div>
         {/* More Content (e.g., Tables, Charts) */}
         <div className="mt-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
               <h3 className="text-xl font-semibold mb-2">Monthly Revenue</h3>
               <div className="text-2xl text-gray-600 font-semibold mb-3">
                  Total Revenue: {totalRevenue}
                  <span className="text-xl font-mono">৳</span>
               </div>
               {isLoading === true ? (
                  <div className="w-full py-3 text-2xl font-mono font-semibold">
                     Loading...
                  </div>
               ) : (
                  <MonthlyRevenueChart
                     categories={months}
                     datas={revenueDatas}
                  />
               )}
            </div>
         </div>
      </main>
   );
}
