import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { RiLayoutBottomFill } from "react-icons/ri";

import "./sideBar.css";

function sideBar() {
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [data, setData] = useState([]);
  function addBtn() {
    console.log(setData(discount + quantity));
    const modul = () => {
      const combining1 = discount / 1000;
      const combining2 = quantity % 100;
      const combining3 = combining1 - combining2;
      console.log(combining3);
    };
    modul();
    // setQuantity("");
    // setDiscount("");
  }

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
              <div className="datashow">
                {/* {data} */}
                {/* {discount} */}
              </div>
            </div>
            <div className="towBtnHoldOderandPorduct">
              {data}
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
