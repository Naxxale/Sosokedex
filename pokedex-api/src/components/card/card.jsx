import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import "./card.scss";
import images from '../../assets/img/imagesImports';

// Reception des données en tant que props
const PokemonCard = ({ name, type, habitat }) => {
  
  // Utilise le nom pour obtenir l'image
  const pokemonImage = images[name.toLowerCase()] || '';

  return (
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pokemonImage} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                  Type : {type} <br />
                  Habitat : {habitat}
              </Card.Text>
              <Button className="btn btn-outline-light">Détails Pokémon</Button>
          </Card.Body>
      </Card>
  );
};

// Définition des PropTypes
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  image: PropTypes.string,
  habitat: PropTypes.number 
};

export default PokemonCard;