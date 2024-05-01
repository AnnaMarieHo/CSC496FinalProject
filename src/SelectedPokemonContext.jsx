import React, { createContext, useContext, useState } from "react";

const SelectedPokemonContext = createContext();

export const useSelectedPokemon = () => useContext(SelectedPokemonContext);

export const SelectedPokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <SelectedPokemonContext.Provider value={{ selectedPokemon, selectPokemon }}>
      {children}
    </SelectedPokemonContext.Provider>
  );
};
