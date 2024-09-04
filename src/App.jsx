import React from "react";
import Sidebar from "./sideBar.jsx";
import Leftsidebar from "./leftSideBar.jsx";
import Topnavbar from "./topNavBar.jsx";
import Secoundnav from "./secoundNav.jsx";
// ROUTRING IMPORT IN REACT APP
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./pages/From";

// import Mainrecipyside from "./mainRecipySide.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Topnavbar />
      <div className="topAndSideBarFLex">
        <div className="leftAndCenter">
          <Leftsidebar />
          <Secoundnav />
          {/* <Mainrecipyside /> */}
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
