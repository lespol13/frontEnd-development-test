import React from "react";
import "./ArrowButton.css";

const ArrowButton = ({ img, handleFunction }) => {
  return (
    <>
      <input type="checkbox" id="btn-arrow" onClick={handleFunction} />
      <label htmlFor="btn-arrow" className="arrow-label">
        <img src={img} alt="Arrow Icon"></img>
      </label>
    </>
  );
};

export default ArrowButton;
