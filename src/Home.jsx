import React, { useState, useEffect, useContext } from "react";
import PokemonPage from "./PokemonPage";
import PokemonContext from "./PokemonContext";
import "./Home.css";
import cinemaIcon from "./assets/cinema.png";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [activeOption, setActiveOption] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pokemonData = useContext(PokemonContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePokemonSelect = (selectedPokemon) => {
    setActiveOption(selectedPokemon);
    setSelectedPokemon(selectedPokemon);
  };

  return (
    <div style={{ display: "flex", paddingTop: "60px" }}>
      <div style={{ position: "absolute", left: "100%" }}>
        <div className="pokemon-list">
          {pokemonData.length ? (
            <ul>
              {pokemonData.map((pokemonData, index) => (
                <li
                  className={`list-items ${
                    activeOption === pokemonData ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handlePokemonSelect(pokemonData)}
                >
                  {windowWidth > 800 && (
                    <img style={{ transform: "scale(0.9)" }} src={cinemaIcon} />
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "80%",
                      paddingLeft: "0px",
                    }}
                  >
                    <img
                      className="sprite-image"
                      src={pokemonData.spriteUrl}
                      alt={`${pokemonData.name} Sprite`}
                    />
                    <h3 className="pokemon-text"> {pokemonData.name}</h3>
                    <h3 className="number-text">No. {pokemonData.number}</h3>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>

      {/* <div className="selected-card-container"> */}
      <div className="selected-card">
        {selectedPokemon ? (
          <PokemonPage
            index={selectedPokemon.number}
            spriteUrl={selectedPokemon.spriteUrl}
            name={selectedPokemon.name}
            artworkUrl={selectedPokemon.artworkUrl}
            baseStat={selectedPokemon.stats}
            type={selectedPokemon.types.map((type) => type)}
            description={selectedPokemon.description}
            weight={selectedPokemon.weight}
            height={selectedPokemon.height}
          />
        ) : (
          <p style={{ width: "150px" }}>Select A Pokemon</p>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}