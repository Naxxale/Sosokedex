import React, { useEffect, useState } from 'react';
import { fetchPokemons } from '../api';
import PokemonCard from '../components/card/PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetchPokemons();
            setPokemons(data);
        };

        getPokemons();
    }, []);

    return (
        <div className="pokemon-list">
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.image} // Assure-toi que tu as ce champ dans tes données
                    habitat={pokemon.description} // Optionnel, selon ce que tu souhaites afficher
                />
            ))}
        </div>
    );
};

export default PokemonList;