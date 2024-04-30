import { useEffect, useState } from "react";
import "./PokemonPage.css";
import { flushSync } from "react-dom";

export default function PokemonPage({
  name,
  artworkUrl,
  index,
  spriteUrl,
  baseStat,
  type,
  description,
  height,
  weight,
}) {
  const [pokemonName, setPokemonName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(null);
  const [testStat, setTestStat] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(null);
  const [weaknesses, setWeaknesses] = useState([]);
  const [pokemonHeight, setPokemonHeight] = useState(null);
  const [pokemonWeight, setPokemonWeight] = useState(null);
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
    setPokemonHeight(height);
    setPokemonWeight(weight);

    const calculateWeaknesses = () => {
      const typeWeaknesses = {
        grass: ["fire", "ice", "flying", "bug", "poison"],
        water: ["electric", "grass"],
        ground: ["water", "ice", "grass"],
        rock: ["water", "grass", "fighting", "ground", "steel"],
        fire: ["water", "ground", "rock"],
        flying: ["electric", "ice", "rock"],
        bug: ["fire", "flying", "rock"],
        poison: ["ground", "psychic"],
        ice: ["fire", "fighting", "rock", "steel"],
        dragon: ["ice", "dragon", "fairy"],
        steel: ["fire", "fighting", "ground"],
        normal: [],
        fighting: ["flying", "psychic", "fairy"],
        psychic: ["bug", "ghost", "dark"],
        ghost: ["ghost", "dark"],
        dark: ["fighting", "bug", "fairy"],
        electric: ["ground"],
        fairy: ["poison", "steel"],
      };

      // Check if pokemonTypes is not null
      if (pokemonTypes) {
        const weaknesses = pokemonTypes.reduce((acc, currentType) => {
          return [...acc, ...typeWeaknesses[currentType]];
        }, []);

        // Remove duplicate weaknesses
        const uniqueWeaknesses = [...new Set(weaknesses)];
        setWeaknesses(uniqueWeaknesses);
      }
    };

    calculateWeaknesses();
  }, [
    name,
    artworkUrl,
    type,
    index,
    description,
    spriteUrl,
    pokemonTypes,
    baseStat,
    height,
    weight,
  ]);

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
    <div className="pokemon-page-card-container">
      <div className="pokemon-page-card-text">
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: "0px",
          }}
        >
          <h3>{pokemonName}</h3>
          <h3>No. {pokemonIndex}</h3>
        </h3>
      </div>
      <div className="pokemon-page-card">
        <div style={{ display: "flex", flexDirection: "row" }}>
          {pokemonTypes &&
            pokemonTypes.map((type, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  // display: "flex",
                  // flexDirection: "row",
                  paddingTop: "20px",
                }}
              >
                <span
                  key={index}
                  className="page-type"
                  style={{
                    backgroundColor: typeColors[type],
                    paddingLeft: "19px",
                    paddingRight: "19px",
                    paddingBottom: "3px",
                    borderRadius: "20px",
                    color: "white",
                    boxShadow: "8px 12px 2px -1px rgba(0, 0, 0, .1)",
                  }}
                >
                  {type}{" "}
                </span>
              </div>
            ))}
        </div>
        {imageUrl && (
          <img className="page-image" src={artworkUrl} alt={pokemonName} />
        )}
        <p
          style={{
            // textAlign: "center",
            color: "rgb(197, 197, 197)",
            fontWeight: "lighter",
            width: "70%",
            // backgroundColor: " rgba(0, 0, 0, 0.3)",
            padding: "30px",
          }}
        >
          {pokemonDescription}
        </p>
        <div className="page-stats">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              <h3 className="page-stat-type">Hp: {hp}</h3>
              <h3 className="page-stat-type">Attack: {attack}</h3>

              <h3 className="page-stat-type">Defense: {defense}</h3>
              <h3 className="page-stat-type">Speed: {speed}</h3>
              <h3 className="page-stat-type">Sp. Attack: {specialAttack}</h3>
              <h3 className="page-stat-type">Sp. Defense: {specialDefense}</h3>
            </div>
            <div className="page-stat-container">
              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(hp)}%`,
                }}
              ></h3>
              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(attack)}%`,
                }}
              ></h3>

              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(defense)}%`,
                }}
              ></h3>
              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(speed)}%`,
                }}
              ></h3>
              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(specialAttack)}%`,
                }}
              ></h3>
              <h3
                className="page-stat-bar"
                style={{
                  width: `${limitWidth(specialDefense)}%`,
                }}
              ></h3>
            </div>
          </div>
          <div
            style={{
              width: "60%",
              marginBottom: "30px",
              //   height: "50%",
              //   display: "flex",
              //   flexDirection: "column",
              //   backgroundColor: "rgba(121, 121, 121, 0.2)",
              borderRadius: "30px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h3>Weaknesses</h3>
            {weaknesses.map((weakness, index) => (
              // <div key={index} style={{ marginTop: "5px" }}>
              <span
                key={index}
                style={{
                  display: "inline-block", // or "block"
                  backgroundColor: typeColors[weakness],
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  paddingBottom: "3px",
                  borderRadius: "20px",
                  margin: "5px",
                  boxShadow: "8px 12px 2px -1px rgba(0, 0, 0, .1)",

                  color: "white",
                }}
              >
                {weakness}{" "}
              </span>

              // </div>
            ))}
            <div
              style={{
                margin: "20px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p style={{ margin: "10px" }}>Height: {pokemonHeight}</p>
              <p style={{ margin: "10px" }}>weight: {pokemonWeight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
