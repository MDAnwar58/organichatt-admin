import React from "react";
import { Outlet } from "react-router-dom";

export default function PageOutlet({ sideBar }: { sideBar?: any }) {
  return <Outlet context={{ sideBar: sideBar }} />;
}
