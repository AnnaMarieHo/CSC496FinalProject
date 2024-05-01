import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Pokemon from "./Pokemon";
import { Routes, Route } from "react-router-dom";
import PokemonPage from "./PokemonPage";
import { Overlay } from "./Overlay";
import { useOverlay } from "./OverlayContext";
import {
  SelectedPokemonProvider,
  useSelectedPokemon,
} from "./SelectedPokemonContext"; // Import SelectedPokemonProvider and useSelectedPokemon

function App() {
  // const { isOverlayOpen, hideOverlay } = useOverlay(); // Use the overlay context here
  const { selectedPokemon } = useSelectedPokemon(); // Use selectedPokemon from context
  console.log(selectedPokemon);
  return (
    <SelectedPokemonProvider>
      {" "}
      {/* Wrap your App component with SelectedPokemonProvider */}
      <>
        <NavBar />
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
        {/* <Overlay isOpen={isOverlayOpen} onClose={hideOverlay}>
          {selectedPokemon && (
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
          )}
        </Overlay> */}
      </>
    </SelectedPokemonProvider>
  );
}

export default App;
