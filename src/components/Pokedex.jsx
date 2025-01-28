import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PokemonGrid from "./PokemonGrid.jsx";
import { usePokemon } from "./PokemonProvider.jsx";
import Search from "./Search.jsx";

function Pokedex() {
  const { notInParty } = usePokemon();
  const [search, setSearch] = useState("");

  function isMatch(pokemon) {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  }

  const filteredPokemon = notInParty.filter(isMatch);

  return (
    <>
      <h2>All Pokémon</h2>
      <Col sm={9} md={6} lg={3} className="mb-4 mx-auto">
        <Search id="search" value={search} onChange={setSearch} />
      </Col>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="gy-4">
        <PokemonGrid pokemon={filteredPokemon} location="pokedex" />
      </Row>
    </>
  );
}

export default Pokedex;
