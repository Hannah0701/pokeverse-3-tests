/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useReducer } from "react";
import fetchPokemon from "../fetchPokemon.js";

const PokemonContext = createContext(null);
const PokemonDispatchContext = createContext(null);

function pokemonReducer(pokemon, action) {
  if (action.type === "loaded") {
    return action.data;
  } else if (action.type === "added") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: true };
      } else {
        return p;
      }
    });
  } else if (action.type === "removed") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: false };
      } else {
        return p;
      }
    });
  } else {
    throw new RangeError(`Unknown action: ${action.type}`);
  }
}

export default function PokemonProvider(props) {
  const [pokemon, dispatch] = useReducer(pokemonReducer, []);
  const inParty = pokemon.filter((p) => p.is_in_party);
  const notInParty = pokemon.filter((p) => !p.is_in_party);

  useEffect(() => {
    fetchPokemon().then((data) => {
      dispatch({
        type: "loaded",
        data: data,
      });
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ inParty, notInParty }}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {props.children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}

export function usePokemonDispatch() {
  return useContext(PokemonDispatchContext);
}
