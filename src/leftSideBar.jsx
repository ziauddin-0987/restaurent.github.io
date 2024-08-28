import React from "react";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";

import { PiCurrencyDollarSimple } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";

import "./leftSideBar.css";

function LeftSideBat() {
  return (
    <>
      <div className="mainIcon">
        <div className="sevenIcon">
          <div className="oneIcon ">
            <CiHome className=" anyIcon" />
          </div>
          <div className="towIcon">
            <BsPerson className=" anyIcon" />
          </div>
          <div className="threeIcon ">
            <CiViewTable className=" anyIcon" />
          </div>
          <div className="fourIcon ">
            <PiCurrencyDollarSimple className=" anyIcon" />
          </div>
          <div className="fiveIcon ">
            <PiShoppingCartSimpleLight className=" anyIcon" />
          </div>
          <div className="sixIcon">
            <CiClock2 className=" anyIcon" />
          </div>
          <div className="sevenIcon ">
            <CiSettings className=" anyIcon" />
          </div>
        </div>
        <div className="logInIconBox">
          <div className="sevenIcon ">
            <RiLogoutCircleLine className="logInIcon anyIcon" />
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSideBat;