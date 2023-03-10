import React from "react";
import "./MainPage.scss";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Home />
    </>
  );
};

export default MainPage;
