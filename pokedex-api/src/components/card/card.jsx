import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.scss";

function PokemonCard({name, type, image, habitat}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{image}" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Type : {type}
         Habitat : {habitat}
        </Card.Text>
        <Button className="btn btn-outline-light">Pokemon</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;