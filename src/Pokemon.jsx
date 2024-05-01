import React, { useState, useEffect, useContext } from "react";
import PokemonCard from "./PokemonCard";
import PokemonPage from "./PokemonPage";
import PokemonContext from "./PokemonContext";
import "./Pokemon.css";
import { Overlay } from "./Overlay";
import { useOverlay } from "./OverlayContext"; // Ensure this is correctly imported

export default function Home() {
  // Access overlay state and control methods
  const { isOverlayOpen, showOverlay, hideOverlay } = useOverlay();

  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const pokemonData = useContext(PokemonContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPokemon(pokemonData);
    // console.log(pokemonData);
    // console.log(pokemon);
    // setSelectedPokemon(pokemonData);
  }, [pokemonData]);

  const filteredPokemon = pokemon.filter((pokemonData) =>
    pokemonData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePokemonSelect = (pokemonData) => {
    console.log(pokemonData);
    setSelectedPokemon(pokemonData);
    console.log("SELECTED", selectedPokemon);
    showOverlay(); // Correct usage to show the overlay
  };

  return (
    <>
      <div className="grid-container">
        <input
          style={{
            width: "250px",
            height: "40px",
            textAlign: "center",
            fontSize: "large",
            zIndex: "900",
            borderRadius: "20px",
            border: "solid white 2px",
          }}
          type="text"
          placeholder="Search Pokémon by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredPokemon.length ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            {filteredPokemon.map((pokemonData, index) => (
              <a
                className="pressed"
                key={index}
                onClick={() => handlePokemonSelect(pokemonData)}
              >
                <PokemonCard
                  key={index}
                  index={index}
                  spriteUrl={pokemonData.spriteUrl}
                  name={pokemonData.name}
                  artworkUrl={pokemonData.artworkUrl}
                  baseStat={pokemonData.stats}
                  type={pokemonData.types.map((type) => type)}
                  description={pokemonData.description}
                />
              </a>
            ))}
          </div>
        ) : (
          <p>No Pokémon found</p>
        )}
      </div>
      {selectedPokemon && (
        <Overlay isOpen={isOverlayOpen} onClose={hideOverlay}>
          <PokemonPage
            index={selectedPokemon.number}
            spriteUrl={selectedPokemon.spriteUrl}
            name={selectedPokemon.name}
            artworkUrl={selectedPokemon.artworkUrl}
            baseStat={selectedPokemon.stats}
            type={selectedPokemon.types}
            description={selectedPokemon.description}
            weight={selectedPokemon.weight}
            height={selectedPokemon.height}
          />
        </Overlay>
      )}
    </>
  );
}

{
  /* <PokemonPage
  index={selectedPokemon.number}
  spriteUrl={selectedPokemon.spriteUrl}
  name={selectedPokemon.name}
  artworkUrl={selectedPokemon.artworkUrl}
  baseStat={selectedPokemon.stats}
  type={selectedPokemon.types.map((type) => type)}
  description={selectedPokemon.description}
  weight={selectedPokemon.weight}
  height={selectedPokemon.height}
/> */
}
