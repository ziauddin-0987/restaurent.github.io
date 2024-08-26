import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { RiLayoutBottomFill } from "react-icons/ri";

import "./sideBar.css";

function sideBar() {
  const [itemsAdd ,setitemsAdd] = useState()
  function itemsAddIn() {

    
  }
  return (
    <>
      <div className="sideBar">
        <div className="topSideBar">
          <div className="sidesecund">
            <div className="topSideBarAllIconIn">
              <div className="sideIcon">
                <div className="oneIconInSideBar">
                  <button className="sideBarButtonAdd" onClick={() => {}}>
                    <GrAdd className="S-icon" />
                    <span className="spanText"> add customers</span>
                  </button>
                </div>
                <div className="threeBtnInDiv">
                  <button className="sideBarButton">
                    <GrAdd className="S-icon" />
                  </button>
                  <button className="sideBarButton">
                    <RiLayoutBottomFill className="S-icon" />{" "}
                  </button>
                  <button className="sideBarButton">
                    <IoMdRefresh className="S-icon" />
                  </button>
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
