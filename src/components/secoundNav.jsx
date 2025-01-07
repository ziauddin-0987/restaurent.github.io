import React, { useState } from "react";
import "./secoundNav.css";
import { Outlet } from "react-router-dom";

export default function secoundNav() {
  // const [secundData, setSecundData] = useState("");
  function apiData() {}
  function startes() {
    console.log("startes");
    apiData("startes");
  }

  return (
    <>
      <div className="topListItems">
        <div className="listItems">
          <ul>
            <li
              onClick={() => {
                secundData;
              }}
            >
              startes
            </li>
            <li onClick={apiData}>Breackfast</li>
            <li onClick={apiData}>Leunch</li>
            <li onClick={apiData}>Supper</li>
            <li onClick={apiData}>Deserts</li>
            <li onClick={apiData}>beverges</li>
          </ul>
        </div>
        <div className="outlet"></div>
      </div>
      <Outlet />
    </>
  );
}
