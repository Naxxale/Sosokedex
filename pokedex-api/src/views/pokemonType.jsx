import { useEffect, useState } from 'react';
import PokemonCard from '../components/card/card';
import { Container, Row, Col } from 'react-bootstrap';

const PokemonListByType = ({ nom_type }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemonsByType = async () => {
            if (!nom_type) {
                console.error('No type ID provided');
                return;
            }
            try {
                const response = await fetch(`http://sosokedex-back/pokemons/type/${nom_type}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching pokemons by type:', error);
            }finally {
                setLoading(false);
            }
        };
    
        getPokemonsByType();
    }, [nom_type]);

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