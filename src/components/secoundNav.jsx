import React from "react";
import "./secoundNav.css";
import { Outlet } from "react-router-dom";
import "../components/secoundNav.css" ;

export default function secoundNav() {
 
  return (
    <>
      <Outlet className="outlet"/>
    </>
  );
}
