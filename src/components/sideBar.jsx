import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { RiLayoutBottomFill } from "react-icons/ri";

import "./sideBar.css";

function sideBar() {
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [data, setData] = useState([]);
  let a = 1;
  function addBtn() {
    // console.log();
    setData(discount, quantity);
    // setQuantity("");
    // setDiscount("");
    setDiscount("");
    setQuantity("");
  }

  return (
    <>
      {/* <button onClick ={{onbtn ? "off btn" : "on btn"}}>onClick</button> */}
      <div className="sideBar  ">
        <div className="topSideBar">
          <div className="sidesecund">
            <div className="topSideBarAllIconIn">
              <div className="sideIcon">
                <div className="oneIconInSideBar">
                  <button
                    className="sideBarButtonAdd"
                    onClick={() => {
                      if (a == 1) {
                        console.log("on this button ");
                        a = 0;
                      } else if (a == 0) {
                        console.log("off this button");
                        a = 1;
                      }
                      // console.log("add button  clicked");
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
                {/* <div className="amount"> this is amount</div> */}
                <div className="towInputs">
                  <div className="firstInput">
                    <label htmlFor="quantityNumber">quantity</label>
                    <br />
                    <input
                      type="number"
                      name="quantityNumber"
                      id="quantity"
                      className="quantity ditals"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      value={quantity}
                    />
                  </div>
                  <div className="secundInput">
                    <label htmlFor="discountNumber">discount</label>
                    <br />
                    <input
                      type="number"
                      name="discountNumber"
                      id="discount"
                      className="discount ditals"
                      onChange={(e) => {
                        setDiscount(e.target.value);
                      }}
                      value={discount}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="datashow">
              {data.map((e) => {
                return <div className="allproductDataSave">{e.value}</div>;
              })}
              {data}
              {/* {discount} */}
            </div>
            <div className="towBtnHoldOderandPorduct">
              <div className="holdBtn ">
                <button className="tableBtn">Hold oder</button>
              </div>

              <div className="productBtn">
                <button
                  className="tableBtn"
                  style={{ backgroundColor: "green", border: "none" }}
                  onClick={addBtn}
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
