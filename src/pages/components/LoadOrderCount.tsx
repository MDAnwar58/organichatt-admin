import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIsReadReviewsCount, getOrderCount } from "../apiCalling/action";
import { io } from "socket.io-client";

type Props = {
   children: React.ReactNode;
};

export default function LoadOrderCount({ children }: Props) {
   const localhost = import.meta.env.VITE_API_SOCKET_IO;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getOrderCount() as any);
      dispatch(getIsReadReviewsCount() as any);
   }, [dispatch]);

   useEffect(() => {
      const socket = io(localhost);
      socket.on("newOrder", (order) => {
         if (order === "newOrder") {
            dispatch(getOrderCount() as any);
         }
      });
   }, [dispatch]);

   return <>{children}</>;
}
