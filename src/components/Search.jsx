import Form from "react-bootstrap/Form";

function Search({ label = "Search", ...props }) {
  return (
    <search>
      <Form>
        <Form.Group controlId={props.id}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="search"
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
          />
        </Form.Group>
      </Form>
    </search>
  );
}

export default Search;
