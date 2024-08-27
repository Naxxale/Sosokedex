export const fetchPokemons = async () => {
    const response = await fetch('http://sosokedex-back/pokemon'); 
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default fetchPokemons;