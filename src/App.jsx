import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Pokemon from "./Pokemon";
import { Routes, Route } from "react-router-dom";
import BackgroundImage from "./assets/pokemonBG.jpg";
import {
  SelectedPokemonProvider,
  useSelectedPokemon,
} from "./SelectedPokemonContext";
function App() {
  const { selectedPokemon } = useSelectedPokemon();
  console.log(selectedPokemon);
  return (
    <SelectedPokemonProvider>
      {" "}
      <>
        <NavBar />
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </>
    </SelectedPokemonProvider>
  );
}

export default App;
