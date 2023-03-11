import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { ImArrowLeft } from "react-icons/im";
import "./Menu.scss";

const Menu = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [navbarClass, setNavbarClass] = useState("navbar");
  console.log(isNavbarOpen);

  const toggleNavbar = () => {
    console.log("funkcja klik");
    setIsNavbarOpen((prevstate) => !prevstate);
    setNavbarClass((prevState) =>
      prevState === "navbar" ? "navbar collapsed" : "navbar"
    );
  };

  return (
    <>
      <div className={navbarClass}>
        <div className="analitycs">Analitycs</div>
        <div className="dashboard">
          <RxDashboard className="dashboardIcon" />
          <div className="dashboardWithtText">Dashboard</div>
        </div>
        <div className="classArrow">
          <ImArrowLeft className="arrow" onClick={toggleNavbar} />
        </div>
      </div>
      {/* {isNavbarOpen && <div className="navbar-content"></div>} */}
    </>
  );
};

export default Menu;
