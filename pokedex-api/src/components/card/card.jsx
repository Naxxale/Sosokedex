import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.scss";

function PokemonCard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(error => console.error('Error fetching the pokemons:', error));
  }, []);

  return (
    <div>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id_pokemon} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pokemon.img_src} />
          <Card.Body>
            <Card.Title>{pokemon.nom_pokemon}</Card.Title>
            <Card.Text>
              Type :  {pokemon.Id_Type}
              Habitat :  {pokemon.Id_habitats}.
            </Card.Text>
            <Button className="btn btn-outline-light">Détails Pokémon</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PokemonCard;