import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import "./Menu.scss";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <input placeholder="Search" />
        <BiSearch className="searchIcon" />
      </div>
      <FiSettings />
    </>
  );
};

export default Menu;
