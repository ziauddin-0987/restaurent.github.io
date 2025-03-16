import React from "react";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./leftSideBar.css";

function LeftSideBat() {
  return (
    <>
      <div className="mainIcon  ">
        <div className="sevenIcon">
          <div className="oneIcon ">
            <Link to="home">
              <CiHome className=" anyIcon" aria-placeholder="home" />
            </Link>
          </div>
          <div className="towIcon">
            <Link to="about">
              <BsPerson className=" anyIcon" />
            </Link>
          </div>
          <div className="threeIcon ">
            <Link to="table">
              <CiViewTable className=" anyIcon" />
            </Link>
          </div>
          <div className="fourIcon ">
            <Link to="doller">
              <PiCurrencyDollarSimple className=" anyIcon" />
            </Link>
          </div>
          <div className="fiveIcon ">
            <Link to="shop">
              <PiShoppingCartSimpleLight className=" anyIcon" />
            </Link>
          </div>
          <div className="sixIcon">
            <Link to="time">
              <CiClock2 className=" anyIcon" />
            </Link>
          </div>
          <div className="sevenIcon ">
            <Link to="setting">
              <CiSettings className=" anyIcon" />
            </Link>
          </div>
        </div>
        <div className="logInIconBox">
          <div className="sevenIcon ">
            {/* <Link to="form"> */}
            <RiLogoutCircleLine className="logInIcon anyIcon" />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSideBat;
