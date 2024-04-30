import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./PokemonContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// index.js or App.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { PokemonProvider } from "./PokemonContext";

// ReactDOM.render(
//   <React.StrictMode>
// <PokemonProvider>
//   <App />
// </PokemonProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
