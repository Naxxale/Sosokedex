import { useEffect, useState } from 'react';
import PokemonCard from '../components/card/card';
import { Container, Row, Col } from 'react-bootstrap';

const PokemonListByType = ({ typeId }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemonsByType = async () => {
            try {
                const response = await fetch(`http://sosokedex-back/pokemons/type/${typeId}`);
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching pokemons by type:', error);
            }
        };
    
        getPokemonsByType();
    }, []);

    return (
        <Container>
            <Row>
                {pokemons.length > 0 ? (
                    pokemons.map(pokemon => (
                        <Col key={pokemon.Id_Pokemon} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <PokemonCard
                                key={pokemon.Id_Pokemon} 
                                name={pokemon.nom_pokemon}
                                type={pokemon.nom_type} 
                                image={pokemon.img_src} 
                                habitat={pokemon.nom_habitat} 
                            />
                        </Col>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Row>
        </Container>
    );
};


export default PokemonListByType;