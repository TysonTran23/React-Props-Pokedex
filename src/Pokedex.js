import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'

const Pokedex = ({ pokemons }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-container">
        {pokemons.map((p) => {
          return (
            <Pokecard
              key={p.id}
              name={p.name}
              type={p.type}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              base_experience={p.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
