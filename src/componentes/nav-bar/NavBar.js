import React from "react";
import MenuBar from "../menu-bar/MenuBar";
import IconBar from "../icon-bar/IconBar";
import { menuBarLabels } from "../../helpers/labels";
import lavasconiaImg from "../../assets/imgs/lavasconia.png";
import userIcon from "../../assets/imgs/user-icon.svg";
import shoppingIcon from "../../assets/imgs/shopping-icon.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="bar-img">
        <img src={lavasconiaImg} alt="LAVASCONIA.COM" id="img"></img>
      </div>
      <nav className="menu-bar">
        <ul>
          {menuBarLabels.map(({ id, label }) => (
            <MenuBar key={id} id={id} label={label} />
          ))}
        </ul>
      </nav>
      <div className="icon-bar">
        <IconBar img={userIcon} />
        <IconBar img={shoppingIcon} />
      </div>
    </div>
  );
};

export default NavBar;
