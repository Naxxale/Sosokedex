<?php namespace Repository;

use model\Pokemon;
use PDO;
use Core\HttpReqAttr;
use Core\HttpRequest;

class PokemonRepository extends BaseRepository {
    public function getAllPokemon(){
        $sql = "SELECT * FROM pokemon";
        $queryResponse = $this->preparedQuery($sql);
        $pokemons = $queryResponse->statement->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,"Models\Article");
        return $pokemons;
    }
}