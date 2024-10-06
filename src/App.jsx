import React from "react";
import Sidebar from "./components/sideBar.jsx";
import Leftsidebar from "./components/leftSideBar.jsx";
import Topnavbar from "./components/topNavBar.jsx";
import Secondnav from "./components/secoundNav.jsx";
// import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Topnavbar />
      <div className="topAndSideBarFLex">
        <div className="leftAndCenter">
          {/* <Outlet /> */}
          <Leftsidebar />
          <div className="secoundNavBavANdMaiSide">
            <Secondnav />
          </div>
          {/* <Outlet /> */}
        </div>
        <Sidebar />
        {/* <Outlet /> */}
      </div>
    </>
  );
}

export default App;
