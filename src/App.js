import React from "react";
import pokemons from "./pokemons";
import Pokedex from './Pokedex'
import "./App.css";


function App() {
  return (
    <div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
