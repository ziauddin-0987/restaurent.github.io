import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { RiLayoutBottomFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../features/counter/counterSlice.js";
import "./sideBar.css";

function sideBar() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  let a = 1;
  const [quantity, setQuantity] = useState(parseInt(0));
  const [discount, setDiscount] = useState(parseInt(0));
  const [getData, setGetData] = useState([]);

  function addBtn() {
    if (quantity == "" && discount == "") {
      alert("pleas is from the full feal");
    } else {
      parseInt(quantity);
      parseInt(discount);
      setGetData([...getData, { discount, quantity }]);
      // setGetData(parseInt(discount));
      setDiscount("");
      setQuantity("");
      // console.log(getData.index());
    }
  }
  function discountDataChange(e) {
    setDiscount(e.target.value);
  }
  function quantityDataChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <>
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button> */}
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
                    <span className="spanText"> add card</span>
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
                      onChange={quantityDataChange}
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
                      onChange={discountDataChange}
                      value={discount}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* {count} */}
            <div className="datashow">
              {getData.map((e) => {
                return (
                  <div className="allproductDataSave" key={(e.id = "1")}>
                    {e.quantity + e.discount}
                    <div className="crossAndTextBox">
                      <RxCross1
                        onClick={(e) => {
                          setGetData((e) => {
                            e.filter((task) => task.id !== "");
                          });
                        }}
                      ></RxCross1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="towBtnHoldOderandPorduct">
              <div className="holdBtn ">
                <button className="tableBtn" onChange={(e) => {}}>
                  Hold oder
                </button>
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
