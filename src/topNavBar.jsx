import React from "react";
import { RiRefreshLine } from "react-icons/ri";
import { FcBullish } from "react-icons/fc";
// import { CiSearch } from "react-icons/ci";
import { FaTable } from "react-icons/fa";
import "./topNavBar.css";
import "./leftSideBar.css";

export default function TopNavBar() {
  return (
    <>
      <div className="TopNavBarTag">
        <div className="HeadingAndInput">
          <div className="thsInHeading">
            <h1>Restaurent</h1>
          </div>
          <div className="input">
            <input type="search " className="searchInput" />
          </div>
        </div>
        <div className="refershNetworkButtom">
          <div className="threeittems">
            <div className="refresh">
              <RiRefreshLine className="anyIcon" />
            </div>
            <div className="network">
              <FcBullish className="anyIcon" />
            </div>
            <div className="button">
              <button className="tableBtn ">
                <FaTable /> select table
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
