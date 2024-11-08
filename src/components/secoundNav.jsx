import React from "react";
import "./secoundNav.css";
import { Outlet } from "react-router-dom";

export default function secoundNav() {
  function apiData() {
    console.log("on click function is ok");
    let multiData = "Startes";
    switch (multiData) {
      case "Startes":
        console.log("Startes");
        break;
      case "Breackfast":
        console.log("Breackfast");
        break;
      case "Leunch":
        console.log("Leunch");
        break;
      case "Supper":
        console.log("Supper");
        break;
      case "Desertsa":
        console.log("Desertsa");
        break;
      case "beverges":
        console.log("beverges");
        break;
      default:
        console.log("default data pleace data is not founds");
    }
  }
  let valuesData = () => {
    let data = "startes";
  };
  return (
    <>
      <div className="topListItems">
        <div className="listItems">
          <ul>
            <li onClick={valuesData}>startes</li>
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
