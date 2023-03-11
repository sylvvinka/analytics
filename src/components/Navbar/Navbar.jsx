import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { TbBellRinging2 } from "react-icons/tb";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="analytics-container">Analytics</div>
        <div className="input-container">
          <input placeholder="Search" className="input-field" />
          <BiSearch className="search-icon" />
        </div>
        <div className="ring-icon">
          <TbBellRinging2 />
        </div>
        <div className="settings-icon">
          <FiSettings />
        </div>
      </div>
    </>
  );
};

export default Navbar;
