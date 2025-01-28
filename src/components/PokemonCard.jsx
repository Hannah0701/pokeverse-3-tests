import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { usePokemon, usePokemonDispatch } from "./PokemonProvider.jsx";

const MAX_PARTY_SIZE = 6;

function PokemonCard(props) {
  const { inParty } = usePokemon();
  const dispatch = usePokemonDispatch();

  let button;

  if (props.location === "pokedex") {
    button = (
      <Button
        variant="success"
        disabled={inParty.length === MAX_PARTY_SIZE}
        onClick={() => dispatch({ type: "added", id: props.pokemon.id })}
      >
        Add
      </Button>
    );
  } else if (props.location === "party") {
    button = (
      <Button
        variant="danger"
        onClick={() => dispatch({ type: "removed", id: props.pokemon.id })}
      >
        Remove
      </Button>
    );
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.pokemon.sprites.front_default}
        alt=""
        width={96}
        height={96}
        className="w-auto align-self-center"
      />
      <Card.Body>
        <Card.Title className="text-capitalize">
          {props.pokemon.name}
        </Card.Title>
        {button}
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
