import React from "react";
import Sidebar from "./sideBar.jsx";
import Leftsidebar from "./leftSideBar.jsx";
import Topnavbar from "./topNavBar.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Topnavbar />
      <div className="topAndSideBarFLex">
        <Leftsidebar />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
