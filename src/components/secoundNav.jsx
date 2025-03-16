import React from "react";
import "./secoundNav.css";
import { Outlet } from "react-router-dom";

export default function secoundNav() {
 
  return (
    <>
      <Outlet />
    </>
  );
}
