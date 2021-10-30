import React from "react";
import HeadBar from "../../componentes/head-bar/HeadBar";
import NavBar from "../../componentes/nav-bar/NavBar";
import Publicity from "../../componentes/publicity/Publicity";
import FoodInfo from "../../componentes/food-info/FoodInfo";
import BestSellers from "../../componentes/best-sellers/BestSellers";
import "./Home.css";

export const Home = () => {
  return (
    <div className="index-container">
      <HeadBar />
      <NavBar />
      <Publicity />
      <FoodInfo />
      <BestSellers />
    </div>
  );
};

export default Home;
