import { useEffect, useState } from 'react';
import fetchPokemons from '../services/fetchPokemons';
import PokemonCard from '../components/card/card';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        };
    
        getPokemons();
    }, []);

    return (
        <div className="pokemon-list">
            {pokemons.length > 0 ? (
                pokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.Id_Pokemon} 
                        name={pokemon.nom_pokemon}
                        type={pokemon.Id_Type} 
                        image={pokemon.img_src} 
                        habitat={pokemon.Id_habitats} 
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PokemonList;