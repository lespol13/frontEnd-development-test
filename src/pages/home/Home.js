import React from "react";
import HeadBar from "../../componentes/head-bar/HeadBar";
import NavBar from "../../componentes/nav-bar/NavBar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="index-container">
      <HeadBar />
      <NavBar />
    </div>
  );
};

export default Home;
