import React from "react";
import Sidebar from "./sideBar.jsx";
import Leftsidebar from "./leftSideBar.jsx";
import Topnavbar from "./topNavBar.jsx";
import Secoundnav from "./secoundNav.jsx";
// ROUTRING IMPORT IN REACT APP
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contack.jsx";
// import Contact from "./pages/Contact";
import Form from "./pages/Form.jsx";
import Page from "./pagenotfound.jsx";

// import Mainrecipyside from "./mainRecipySide.jsx";

import "./App.css";
import Customers from "./pages/Customers.jsx";


function App() {
  return (
    <>
      <Topnavbar />
      <div className="topAndSideBarFLex">
        <div className="leftAndCenter">
          <Leftsidebar />
          <div className="secoundNavBavANdMaiSide">
            <Secoundnav />
            {/* <Mainrecipyside /> */}
            <div className="router">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/*" element={<Page />} />
              </Routes>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
