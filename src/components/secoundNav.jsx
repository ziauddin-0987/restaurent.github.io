import React from "react";
import "./secoundNav.css";
import { Outlet } from "react-router-dom";

export default function secoundNav() {
  return (
    <>
      <div className="topListItems">
        <div className="listItems">
          <ul>
            <li>Startes</li>
            <li>Breackfast</li>
            <li>Leunch</li>
            <li>Supper</li>
            <li>Deserts</li>
            <li>beverges</li>
          </ul>
        </div>
        <div className="outlet"></div>
      </div>
      <Outlet />
    </>
  );
}
