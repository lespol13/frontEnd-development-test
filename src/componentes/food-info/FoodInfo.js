import React from "react";
import SimpleCard from "../simple-card/SimpleCard";
import FoodImg from "../../assets/imgs/receta.png";
import { foodInfoLabels } from "../../helpers/labels";
import "./FoodInfo.css";

const FoodInfo = () => {
  return (
    <div className="info-container">
      <div className="food-img">
        <img src={FoodImg} alt="Food Img" id="food-img"></img>
      </div>
      <SimpleCard cardLabels={foodInfoLabels} />
    </div>
  );
};

export default FoodInfo;
