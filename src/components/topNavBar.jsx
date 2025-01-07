import React from "react";
import { RiRefreshLine } from "react-icons/ri";
import { FcBullish } from "react-icons/fc";
// import { CiSearch } from "react-icons/ci";
import { FaTable } from "react-icons/fa";
import "./topNavBar.css";
import "./leftSideBar.css";

export default function TopNavBar() {
  //  const [Values , setValues] = useState("")
  //  const [data , setData] = useState([])

  function hendalEvent(e) {
    console.log(e.target.value);
    setValues(e.target.value, ...Values, setData(push(values)));
  }
  function reload(e) {
    window.location.reload();
    // console.log("refresh");
  }

  return (
    <>
      <div className="TopNavBarTag">
        <div className="HeadingAndInput">
          <div className="thsInHeading">
            <h1>Restaurent</h1>
          </div>
          <div className="input">
            <input
              type="search "
              className="searchInput"
              onChange={hendalEvent}
            />
          </div>
        </div>
        <div className="refershNetworkButtom">
          <div className="threeittems">
            <div className="refresh">
              <RiRefreshLine className="anyIcon" onClick={reload} />
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
