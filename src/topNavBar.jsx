import React from "react";
import "./topNavBar.css";

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
              
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
