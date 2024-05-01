import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const limit = 40;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allPokemon = [];

        let response = await axios.get(url + `?limit=${limit}`);
        allPokemon = response.data.results;
        allPokemon = await Promise.all(
          allPokemon.map(async (pokemon) => {
            let {
              hp,
              attack,
              defense,
              speed,
              specialAttack,
              specialDefense,
            } = 0;
            let types = [];

            const detailedResponse = await axios.get(pokemon.url);
            const pokemonNumber = detailedResponse.data.id; // Extract Pokémon number

            // Loop through each type in the types array
            detailedResponse.data.types.forEach((type) => {
              types.push(type.type.name); // Push the type name to the types array
            });

            // Now the types array will contain all the types of the Pokemon
            // console.log(types);

            detailedResponse.data.stats.forEach((stat) => {
              switch (stat.stat.name) {
                case "hp":
                  hp = stat.base_stat;
                  break;
                case "attack":
                  attack = stat.base_stat;
                  break;
                case "defense":
                  defense = stat.base_stat;
                  break;
                case "speed":
                  speed = stat.base_stat;
                  break;
                case "special-attack":
                  specialAttack = stat.base_stat;
                  break;
                case "special-defense":
                  specialDefense = stat.base_stat;
                  break;
              }
            });

            // Fetch additional description data
            const speciesResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`
            );

            // Extract relevant description data
            const descriptionData = {
              description: speciesResponse.data.flavor_text_entries.find(
                (flavor) => flavor.language.name === "en"
              ).flavor_text,
            };

            return {
              types: types,
              description: descriptionData.description,
              height:
                Math.round(
                  (detailedResponse.data.height * 0.328084 + 0.00001) * 100
                ) / 100,
              weight:
                Math.round(
                  (detailedResponse.data.weight * 0.220462 + 0.00001) * 100
                ) / 100,
              name: pokemon.name,
              artworkUrl:
                detailedResponse.data.sprites.other["official-artwork"]
                  .front_default,
              spriteUrl: detailedResponse.data.sprites.front_default,
              number: pokemonNumber,
              stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense,
              },

              // Merge additional description data
              //   ...descriptionData,
            };
          })
        );
        while (response.data.next && allPokemon.length < limit) {
          response = await axios.get(response.data.next);
          const remainingLimit = limit - allPokemon.length;
          // Append only the necessary number of Pokémon to meet the limit
          allPokemon = [
            ...allPokemon,
            ...response.data.results.slice(0, remainingLimit),
          ];
        }

        setPokemonData(allPokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
