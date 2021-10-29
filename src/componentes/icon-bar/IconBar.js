import React from "react";
import "./IconBar.css";

const IconBar = ({ img }) => {
  return (
    <>
      <input type="checkbox" id="btn-menu" />
      <label htmlFor="btn-menu" className="menu-label">
        <img src={img} alt="Menu Icon"></img>
      </label>
    </>
  );
};

export default IconBar;
