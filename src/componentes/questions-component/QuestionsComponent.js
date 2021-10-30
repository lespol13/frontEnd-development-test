import React, { useEffect } from "react";
import { handleAccordion } from "../../helpers/utils";
import { questionsLabels } from "../../helpers/labels";
import "./QuestionsComponent.css";

const QuestionsComponent = () => {
  useEffect(() => {
    handleAccordion();
  }, []);

  return (
    <div className="questions-component">
      {questionsLabels.map(({ id, title, text }) => (
        <div key={id}>
          <div className="title-tab">
            {title}
            <i className="fa fa-1x"></i>
          </div>
          <div className="content-tab">{text}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsComponent;
