import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import "./card.scss";

// Reception des données en tant que props
const PokemonCard = ({ name, type, image, habitat }) => (
  <Card style={{ width: '18rem' }}>
      {image && <Card.Img variant="top" src={image} alt={name} />}
      <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              Type : {type}
              Habitat : {habitat}
          </Card.Text>
          <Button className="btn btn-outline-light">Détails Pokémon</Button>
      </Card.Body>
  </Card>
);

// Définition des PropTypes
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired, 
  image: PropTypes.string,
  habitat: PropTypes.number 
};

export default PokemonCard;