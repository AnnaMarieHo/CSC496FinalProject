import React, { useEffect, useState } from "react";
import "./PokemonCard.css";

export default function PokemonCard({
  name,
  artworkUrl,
  index,
  spriteUrl,
  baseStat,
  type,
  description,
}) {
  const [pokemonName, setPokemonName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(null);
  const [testStat, setTestStat] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(null);
  const { hp, attack, defense, speed, specialAttack, specialDefense } =
    baseStat || {};

  useEffect(() => {
    // console.log(index);
    setPokemonName(name);
    setPokemonIndex(index);
    setImageUrl(artworkUrl);
    setTestStat(baseStat);
    setPokemonTypes(type);
    setPokemonDescription(description);
  }, [name, artworkUrl, type, index, description, spriteUrl, baseStat]);

  // Function to limit the width of stat bars to 100%
  const limitWidth = (value) => {
    return Math.min(value, 100);
  };

  const typeColors = {
    bug: "#B1C12E",
    dark: "#4F3A2D",
    dragon: "#755EDF",
    electric: "#FCBC17",
    fairy: "#F4B1F4",
    fighting: "#823551D",
    fire: "#E73B0C",
    flying: "#A3B3F7",
    ghost: "#6060B2",
    grass: "#74C236",
    ground: "#D3B357",
    ice: "#A3E7FD",
    normal: "#C8C4BC",
    poison: "#934594",
    psychic: "#ED4882",
    rock: "#B9A156",
    steel: "#B5B5C3",
    water: "#3295F6",
  };

  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card">
        <h3 className="pokemon-card-text">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              paddingLeft: "0px",
            }}
          >
            <h3
              style={{
                color: "black",
              }}
            >
              {pokemonName}
            </h3>

            <h3
              style={{
                color: "black",
              }}
            >
              No. {pokemonIndex}
            </h3>
          </div>
          {/* <div style={{ width: "100%" }}> */}

          <div className="stats">
            <div style={{ width: "100px" }}>
              <h3 className="stat-type">Hp: {hp}</h3>
              <h3 className="stat-type">attack: {attack}</h3>
              <h3 className="stat-type">defense: {defense}</h3>
              <h3 className="stat-type">speed: {speed}</h3>
              <h3 className="stat-type">Sp. Attack: {specialAttack}</h3>
              <h3 className="stat-type">Sp. Defense: {specialDefense}</h3>
            </div>
            <div className="stat-container">
              {/* <h3 className="stat-type">HP</h3> */}
              <h3
                role="progressbar"
                className="stat-bar"
                style={{
                  width: `${limitWidth(hp)}%`,
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></h3>
              <h3
                className="stat-bar"
                style={{
                  width: `${limitWidth(attack)}%`,
                }}
              ></h3>

              <h3
                className="stat-bar"
                style={{
                  width: `${limitWidth(defense)}%`,
                }}
              ></h3>
              <h3
                className="stat-bar"
                style={{
                  width: `${limitWidth(speed)}%`,
                }}
              ></h3>
              <h3
                className="stat-bar"
                style={{
                  width: `${limitWidth(specialAttack)}%`,
                }}
              ></h3>
              <h3
                className="stat-bar"
                style={{
                  width: `${limitWidth(specialDefense)}%`,
                }}
              ></h3>
            </div>
          </div>

          {pokemonTypes &&
            pokemonTypes.map((type, index) => (
              <>
                <span
                  style={{
                    backgroundColor: typeColors[type],
                    paddingLeft: "19px",
                    paddingRight: "19px",
                    paddingBottom: "3px",
                    borderRadius: "20px",
                    color: "white",
                    boxShadow: "8px 12px 2px -1px rgba(0, 0, 0, .2)",
                  }}
                  key={index}
                  className="type"
                >
                  {type}
                </span>
              </>
            ))}
          <p
            style={{
              color: " rgb(185, 185, 185)",
              fontWeight: "lighter",
              padding: "20px",
            }}
          >
            {pokemonDescription}
          </p>
        </h3>
        {imageUrl && (
          <img className="image" src={artworkUrl} alt={pokemonName} />
        )}
      </div>
    </div>
  );
}
