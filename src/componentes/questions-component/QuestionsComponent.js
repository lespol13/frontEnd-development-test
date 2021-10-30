import React, { useEffect } from "react";
import { handleAccordion } from "../../helpers/utils";
import { questionsLabels } from "../../helpers/labels";
import "./QuestionsComponent.css";

const QuestionsComponent = () => {
  useEffect(() => {
    handleAccordion();
  }, []);

  return (
    <div class="questions-component">
      {questionsLabels.map(({ id, title, text }) => (
        <div key={id}>
          <div class="title-tab">
            {title}
            <i class="fa fa-1x"></i>
          </div>
          <div class="content-tab">{text}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsComponent;
