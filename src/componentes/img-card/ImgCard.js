import React from "react";
import "./ImgCard.css";

const ImgCard = ({ sellerLabels }) => {
  const { title, text, buttonText } = sellerLabels;

  return (
    <div className="img-card">
      <h5>{title}</h5>
      <p>{text}</p>
      <div className="buttonImg-container">
        <input type="checkbox" id="btn" />
        <label htmlFor="btn">{buttonText}</label>
      </div>
    </div>
  );
};

export default ImgCard;
