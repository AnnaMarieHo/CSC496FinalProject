import React, { createContext, useState, useContext } from "react";

const OverlayContext = createContext();

export function useOverlay() {
  return useContext(OverlayContext);
}

export const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const showOverlay = () => setOverlayOpen(true);
  const hideOverlay = () => setOverlayOpen(false);

  return (
    <OverlayContext.Provider
      value={{ isOverlayOpen, showOverlay, hideOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
