import { useEffect, useState } from "react";
import "./PokemonPage.css";

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
  pokemon,
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
    console.log(pokemon);
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

      if (pokemonTypes) {
        const weaknesses = pokemonTypes.reduce((acc, currentType) => {
          return [...acc, ...typeWeaknesses[currentType]];
        }, []);

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
    pokemon,
    // selectedPokemon,
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
        <h3 className="page-header">
          <h3>{pokemonName}</h3>
          <h3>No. {pokemonIndex}</h3>
        </h3>
      </div>
      <div className="pokemon-page-card">
        <div className="type-container">
          <div className="type-container">
            {pokemonTypes &&
              pokemonTypes.map((type, index) => (
                <div key={index} className="type-item">
                  <span
                    key={index}
                    className="type-span"
                    style={{
                      backgroundColor: typeColors[type],
                    }}
                  >
                    {type}{" "}
                  </span>
                </div>
              ))}
          </div>
        </div>
        {imageUrl && (
          <>
            <img className="page-image" src={artworkUrl} alt={pokemonName} />
            {/* <h3>{pokemonName}</h3> */}
          </>
        )}

        <p className="pokemon-page-description">{pokemonDescription}</p>
        <div className="page-stats">
          <div className="stats-types-container">
            <h3 style={{ marginBottom: "17px" }}>Stats</h3>

            <div className="stats-bar-container">
              <div className="stats-container">
                <h3 className="page-stat-type">Hp:</h3>
                <h3 className="page-stat-type">Attack:</h3>

                <h3 className="page-stat-type">Defense: </h3>
                <h3 className="page-stat-type">Speed: </h3>
                <h3 className="page-stat-type">Sp. Attack:</h3>
                <h3 className="page-stat-type">Sp. Defense:</h3>
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
          </div>
          <div className="weaknesses-container">
            <h3 style={{ width: "100%" }}>Weaknesses</h3>
            {weaknesses.map((weakness, index) => (
              // <div key={index} style={{ marginTop: "5px" }}>
              <span
                key={index}
                className="weakness-style"
                style={{
                  backgroundColor: typeColors[weakness],
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
