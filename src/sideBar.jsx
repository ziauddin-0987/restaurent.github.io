import React from "react";
import "./sideBar.css";

function sideBar() {
  return (
    <>
      <div className="sideBar">
        <div className="topSideBar">
          <div className="sidesecund">
            <div className="topSideBarAllIconIn">
              <div className="sideIcon">
                <div className="oneIconInSideBar">
                <button className="sideBarButton">+ add customer</button>
                </div>
                <div className="threeBtnInDiv">
                  <button className="sideBarButton">+ add customer</button>
                  <button className="sideBarButton">+ add customer</button>
                  <button className="sideBarButton">+ add customer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default sideBar;
