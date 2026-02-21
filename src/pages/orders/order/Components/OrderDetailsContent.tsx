import React, { useEffect } from "react";
import UserInfo from "./UserInfo";
import OrderInfo from "./OrderInfo";
import TotalAmount from "./TotalAmount";
import OrderItems from "./OrderItems";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../apiCalling/action";
import { getOrderCount } from "../../../apiCalling/action";

type Seller = {
   id: number;
   name: string;
   email: string;
   phone_number: string;
   avatar: string;
};

type ShippingInfo = {
   address: string;
   city_or_town: string;
   house_no: string | null;
   present_address: string;
   s_email: string;
   s_name: string;
   s_phone: string;
   zip_code: string;
};

type User = {
   avatar: string;
   id: number;
   phone_number: string;
   shippingInfo: ShippingInfo;
};

type product = {
   id: number;
   name: string;
   brand: string | null;
   category: string;
   discount_price: string | null;
   image_url: string;
   refoundable: string;
   sub_category: string | null;
};

type Item = {
   id: number;
   product: product;
   qty: string;
   sale_price: string;
   sale_discount_price: number;
   weight_price: number;
   weight_discount_price: number;
   size_price: number;
   size_discount_price: number;
   size_number_price: number;
   size_number_discount_price: number;
   rating: string;
};

type Invoice = {
   id: number;
   items: Item[];
   order_status: string;
   paid_date: string | null;
   payment_method: string;
   total_amount: string;
   tran_id: string;
   updated_at: string;
   user: User;
   created_at: string;
};

export default function OrderDetailsContent() {
   const { id } = useParams();
   const [items, setItems] = React.useState([] as any[]);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getData(Number(id)) as any);
      dispatch(getOrderCount() as any);
   }, [id, dispatch]);

   const { invoice = {} } = useSelector((state: any) => state);
   const Invoice = invoice as Invoice;

   const userInfo = {
      name: Invoice?.user?.shippingInfo?.s_name,
      email: Invoice?.user?.shippingInfo?.s_email,
      firstPhone: Invoice?.user?.phone_number ?? "",
      secondPhone: Invoice?.user?.shippingInfo?.s_phone ?? "",
      avatar: Invoice?.user?.avatar ?? "",
      houseNo: Invoice?.user?.shippingInfo?.house_no,
      zipCode: Invoice?.user?.shippingInfo?.zip_code,
      address: Invoice?.user?.shippingInfo?.present_address,
   } as any;

   const orderInfo = {
      orderId: Invoice?.tran_id !== undefined ? Invoice?.tran_id : "",
      orderDate: Invoice?.created_at,
      paidDate: Invoice?.paid_date ?? "",
      orderStatus: Invoice?.order_status ?? "",
      paymentMethod: Invoice?.payment_method,
   } as any;

   return (
      <section className="relative">
         <div className="w-full max-w-7xl lg-6 mx-auto">
            <div className="flex items-start flex-col gap-6 xl:flex-row ">
               <div className="w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
                  <div className="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
                     <UserInfo userInfo={userInfo} />
                     <OrderInfo orderInfo={orderInfo} />
                  </div>{" "}
                  <TotalAmount totalAmount={Invoice?.total_amount} />
               </div>
               <OrderItems items={Invoice?.items} />
            </div>
         </div>
      </section>
   );
}
