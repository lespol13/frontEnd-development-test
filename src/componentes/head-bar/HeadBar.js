import React from "react";
import { headBarLabel } from "../../helpers/labels";
import "./HeadBar.css";

const HeadBar = () => {
  return (
    <div className="head-bar">
      <label>{headBarLabel}</label>
    </div>
  );
};

export default HeadBar;
