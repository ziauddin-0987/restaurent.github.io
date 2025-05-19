import {useState} from "react";
import { RiRefreshLine } from "react-icons/ri";
import { FcBullish } from "react-icons/fc";
// import { CiSearch } from "react-icons/ci";
import { FaTable } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Siders from "./sideBar.jsx";
import { MdFormatListBulleted } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./topNavBar.css";
import "./leftSideBar.css";

export default function TopNavBar() {
  // let siderbars = "";
  const dispatch = useDispatch();

  // const Side = useSelector((state) => state.counter.value);
// function inputClicks(){

// }
// if (a == 1) {
//   console.log("on this button ");
//   let siderbars= Side
//   // <Siders/>
//   a = 0;
// } else if (a == 0) {
//   console.log("off this button");
//   let siderbars= ""
//   a = 1;
// }

function abc(){

  <Siders/>
  // useDispatch()
}
 
   const [Values , setValues] = useState("")
   const [data , setData] = useState([])
  let a =1;

  function hendalEvent(e) {
    // console.log(e.target.value);
    // setValues(e.target.value, ...Values, setData(push(values)));
     
   


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
<div className="inputAndSerchBtn">

          <div className="input">
            <input
              type="search "
              className="searchInput"
              onChange={hendalEvent}
              placeholder="search..."
              />
          </div>
<div className="searchBtnBox">
  <CiSearch className="inputSearchBtn"/>
  
  </div>          
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
               {/* onClick={} */}



               <Link to="home/sider">
              <button className="tableBtn " >
                <FaTable  /> select table
              </button>
              </Link>
            </div>
            {/* <div className="manu">
              <MdFormatListBulleted className="manuBtn"/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
