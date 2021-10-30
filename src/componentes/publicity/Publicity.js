import React from "react";
import EckoImg from "../../assets/imgs/ecko.png";
import PublicityImg from "../../assets/imgs/publicity.png";
import "./Publicity.css";

const Publicity = () => {
  return (
    <div className="publicity-component">
      <div className="img-container">
        <img src={EckoImg} alt="Ecko Icon" id="icon-img"></img>
      </div>
      <div className="img-container">
        <img src={PublicityImg} alt="Publicity" id="publicity-img"></img>
      </div>
    </div>
  );
};

export default Publicity;
