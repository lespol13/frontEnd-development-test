import React from "react";
import ImgComponent from "../img-component/ImgComponent";
import { characterLabels } from "../../helpers/labels";
import "./CharacterComponent.css";

const CharacterComponent = ({ character }) => {
  return (
    <div className="character-component">
      <h5>{characterLabels.title}</h5>
      <div className="character-info">
        <ImgComponent img={character.image} />
        <div className="character-text">
          <p>
            {characterLabels.name}: {character.name}
          </p>
          <p>
            {characterLabels.type}: {character.gender}
          </p>
          <p>{characterLabels.episodes}:</p>
          {character.episode.slice(0, 6).map((episode, i) => (
            <pre key={i}>{episode}</pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterComponent;
