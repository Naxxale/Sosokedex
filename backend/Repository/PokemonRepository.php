<?php namespace Repository;

use model\Pokemon;
use PDO;
use Core\HttpReqAttr;
use Core\HttpRequest;

class PokemonRepository extends BaseRepository {

  
    public function getPokemon()
    {
        $sql = "SELECT p.Id_Pokemon, p.nom_pokemon, p.img_src, t.nom_type, h.nom_habitat
        FROM pokemon p
        JOIN type t ON p.Id_Type = t.Id_Type
        JOIN habitats h ON p.Id_habitats = h.Id_habitats";

    $queryResponse = $this->preparedQuery($sql);
    $pokemons = $queryResponse->statement->fetchAll(PDO::FETCH_ASSOC);

    return $pokemons;
    }

    public function getPokemonsByType($typeId) {
        $sql = "SELECT p.Id_Pokemon, p.nom_pokemon, p.img_src, t.nom_type, h.nom_habitat
                FROM Pokemon p
                JOIN Types t ON p.Id_Type = t.Id_Type
                JOIN Habitats h ON p.Id_habitats = h.Id_habitats
                WHERE t.Id_Type = :typeId";
        
        $queryResponse = $this->preparedQuery($sql, ['typeId' => $typeId]);
        return $queryResponse->statement->fetchAll(PDO::FETCH_ASSOC);
    }
}