<?php namespace Controller;

use Repository\PokemonRepository;
use Core\HttpResponse;

class PokemonController extends BaseController
{
    public function __construct($method, $id)
    {
        parent::__construct($method, $id);
    }

    // Méthode pour récupérer tous les Pokémon
    protected function get() : array
    {
        $repository = new PokemonRepository();
        return $repository->getPokemon();
    }

        //  obtenir un Pokémon spécifique par son type
        public function getByType(string $typeName) : array{
            $repository = new PokemonRepository();
            // Utilisation de l'identifiant de type (id) pour récupérer les Pokémon
            return $repository->getPokemonsByType($typeName);
        }
   
}