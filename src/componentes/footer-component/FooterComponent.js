import React from "react";
import QuestionsComponent from "../questions-component/QuestionsComponent";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="footer-component">
      <QuestionsComponent />
      <div className="character-component"></div>
    </div>
  );
};

export default FooterComponent;
