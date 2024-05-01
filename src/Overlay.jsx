import "./Overlay.css";
import PokemonPage from "./PokemonPage";

export function Overlay({ isOpen, onClose, children }) {
  console.log(isOpen);
  return (
    <>
      {isOpen ? (
        <div className="overlay">
          <div className="overlay-background" onClick={onClose}>
            <div className="overlay-container">
              <div className="overlay-controls"></div>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
