import React from "react";
import "./ImgComponent.css";

const ImgComponent = ({ img }) => {
  return (
    <div className="img-component">
      <img src={img} alt="Img Card"></img>
    </div>
  );
};

export default ImgComponent;
