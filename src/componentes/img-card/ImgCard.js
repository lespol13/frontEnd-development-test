import React from "react";
import ImgComponent from "../img-component/ImgComponent";
import NoImg from "../../assets/imgs/no-img.png";
import "./ImgCard.css";

const ImgCard = ({ sellerLabels }) => {
  const { title, text, buttonText } = sellerLabels;

  return (
    <div className="img-card">
      <ImgComponent img={NoImg} />
      <div className="card-info">
        <h5>{title}</h5>
        <p>{text}</p>
        <div className="buttonImg-container">
          <input type="checkbox" id="btn" />
          <label htmlFor="btn">{buttonText}</label>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
