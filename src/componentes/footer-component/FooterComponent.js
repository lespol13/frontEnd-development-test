import React, { useEffect, useState } from "react";
import QuestionsComponent from "../questions-component/QuestionsComponent";
import CharacterComponent from "../character-component/CharacterComponent";
import { getService } from "../../services/get.service";
import "./FooterComponent.css";

const FooterComponent = () => {
  const [character, setCharacter] = useState({});
  const [isCharacter, setIsCharacter] = useState(false);

  useEffect(() => {
    handleGetCharacter();
  }, []);

  const handleGetCharacter = async () => {
    const getCharacter = await getService(
      "https://rickandmortyapi.com/api/character/2"
    );
    console.log("Character: ", getCharacter);
    if ("error" in getCharacter) {
      setIsCharacter(false);
      alert("Error con el servidor.");
    } else {
      setCharacter(getCharacter);
      setIsCharacter(true);
    }
  };

  return (
    <div className="footer-component">
      <QuestionsComponent />
      {isCharacter && <CharacterComponent character={character} />}
    </div>
  );
};

export default FooterComponent;
