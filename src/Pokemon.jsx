import React, { useState, useEffect, useContext } from "react";
import PokemonCard from "./PokemonCard";
import PokemonContext from "./PokemonContext";
import "./Pokemon.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [numColumns, setNumColumns] = useState(3);
  const pokemonData = useContext(PokemonContext);
  const [types, setPokemonTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    setPokemon(pokemonData);

    const allPokemonTypes = pokemonData.map((pokemon) => pokemon.types);
    setPokemonTypes(allPokemonTypes);
  }, [pokemonData]);

  useEffect(() => {
    const calculateColumns = () => {
      const screenWidth = window.innerWidth;
      const columns = Math.floor(screenWidth / 450);
      setNumColumns(columns);
    };

    calculateColumns();

    window.addEventListener("resize", calculateColumns);

    return () => {
      window.removeEventListener("resize", calculateColumns);
    };
  }, []);

  // Filter the pokemon based on search query
  const filteredPokemon = pokemon.filter((pokemonData) =>
    pokemonData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* <div className="search-container"> */}

      {/* </div> */}
      <div className="grid-container">
        <input
          style={{
            width: "250px",
            height: "40px",
            textAlign: "center",
            fontSize: "large",
            borderRadius: "20px",
            border: "none",
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
            ))}
          </div>
        ) : (
          <p>No Pokémon found</p>
        )}
      </div>
    </>
  );
}
