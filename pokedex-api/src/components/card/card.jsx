import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.scss";

function PokemonCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/img/sosomonfeu.jpg" />
      <Card.Body>
        <Card.Title>Nom Pokémon</Card.Title>
        <Card.Text>
         Yo je suis un pokémon.
        </Card.Text>
        <Button className="btn btn-outline-light">Pokemon</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;