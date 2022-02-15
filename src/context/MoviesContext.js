import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieController = (props) => {
  const [movies, setMovies] = useState([
    {
      name: `Don't look up`,
      price: "10$",
    },
    {
      name: `Joker`,
      price: "12$",
    },
    {
      name: "Parasite",
      price: "8$",
    },
    {
      name: "Old boy",
      price: "5$",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
