import React from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { RiLayoutBottomFill } from "react-icons/ri";

import "./sideBar.css";

function sideBar() {
  return (
    <>
      {/* <button onClick ={{onbtn ? "off btn" : "on btn"}}>onClick</button> */}
      <div className="sideBar  zia">
        <div className="topSideBar">
          <div className="sidesecund">
            <div className="topSideBarAllIconIn">
              <div className="sideIcon">
                <div className="oneIconInSideBar">
                  <button
                    className="sideBarButtonAdd"
                    onClick={() => {
                      console.log("add button  clicked");
                    }}
                  >
                    <GrAdd className="S-icon" />
                    <span className="spanText"> add customers</span>
                  </button>
                </div>
                <div className="threeBtnInDiv">
                  <button className="sideBarButton">
                    <GrAdd className="S-icon" />
                  </button>
                  <button className="sideBarButton">
                    <RiLayoutBottomFill className="S-icon" />
                  </button>
                  <button className="sideBarButton">
                    <IoMdRefresh className="S-icon" />
                  </button>
                </div>
              </div>
            </div>

            <div className="btnAmountBox">
              <div className="totalAmount">
                <div className="amount"> this is amount</div>
              </div>
            </div>
            <div className="towBtnHoldOderandPorduct">
              <div className="holdBtn ">
                <button className="tableBtn">Hold oder</button>
              </div>
              <div className="productBtn">
                <button
                  className="tableBtn"
                  style={{ backgroundColor: "green", border: "none" }}
                >
                  product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default sideBar;
