import React from "react";
import "./SimpleCard.css";

const SimpleCard = ({ cardLabels }) => {
  const { title, subtitle, firstText, secondText, buttonText } = cardLabels;

  return (
    <div className="simple-card">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{firstText}</p>
      <p>{secondText}</p>
      <div className="button-container">
        <input type="checkbox" id="btn" />
        <label htmlFor="btn">{buttonText}</label>
      </div>
    </div>
  );
};

export default SimpleCard;
