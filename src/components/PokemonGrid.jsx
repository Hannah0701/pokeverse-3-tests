import Col from "react-bootstrap/Col";
import PokemonCard from "./PokemonCard.jsx";

function PokemonGrid(props) {
  return (
    <>
      {props.pokemon.map((p) => (
        <Col key={p.name}>
          <PokemonCard pokemon={p} location={props.location} />
        </Col>
      ))}
    </>
  );
}

export default PokemonGrid;
