import React from "react";
import { useLocation } from "react-router-dom";

export const NoMatch = () => {
  const path = useLocation();

  return <h2 style={{ alignSelf: "center" }}>Ahm... Tf are you doing on {path.pathname}? 🤔</h2>;
};
