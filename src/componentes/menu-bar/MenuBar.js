import React from "react";
import "./MenuBar.css";

const MenuBar = ({ id, label }) => {
  return (
    <li key={id}>
      <span>{label}</span>
    </li>
  );
};

export default MenuBar;
