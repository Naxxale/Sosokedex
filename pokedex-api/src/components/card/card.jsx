import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import "./card.scss";
import images from '../../assets/img/imagesImports';
import { Link } from 'react-router-dom';

// Reception des données en tant que props
const PokemonCard = ({ name, type, habitat }) => {
  
  const sanitizeName = (name) => {
    return name
        .normalize('NFD') // Normalisation pour séparer les accents
        .replace(/[\u0300-\u036f]/g, '') // Suppression des accents
        .replace(/[^a-zA-Z0-9]/g, '_') // Remplacement des caractères spéciaux par des underscores
        .toLowerCase(); // Conversion en minuscule
};

const pokemonImage = images[sanitizeName(name)] || '';

  return (
      <Card style={{ width: '18rem', height: '35rem' }}>
          <Card.Img variant="top" src={pokemonImage} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                  Type : {type} <br />
                  Habitat : {habitat}
              </Card.Text>
              <Button className="btn btn-outline-light" as={Link} to="/details">Détails Pokémon</Button>
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