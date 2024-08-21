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
        return $repository->getAll([]);
    }
    //Obtention par type ?
    //Obtention par habitats ?
}