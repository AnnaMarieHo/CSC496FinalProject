import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./PokemonContext";
import { OverlayProvider } from "./OverlayContext.jsx";
import { SelectedPokemonProvider } from "./SelectedPokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedPokemonProvider>
      <BrowserRouter>
        <OverlayProvider>
          <PokemonProvider>
            <App />
          </PokemonProvider>
        </OverlayProvider>
      </BrowserRouter>
    </SelectedPokemonProvider>
  </React.StrictMode>
);
