import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, image, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img src={image} className="Pokecard-image"/>
      <ul className="Pokecard-info">
        <li>Type: {type}</li>
        <li>EXP: {base_experience}</li>
      </ul>
    </div>
  );
};

export default Pokecard;
