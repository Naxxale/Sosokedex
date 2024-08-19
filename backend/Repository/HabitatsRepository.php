<?php namespace Repository;

use model\Pokemon;
use PDO;
use Core\HttpReqAttr;
use Core\HttpRequest;

class HabitatsRepository extends BaseRepository {
    public function getAllHabitats(){
        $sql = "SELECT * FROM habitats";
        $queryResponse = $this->preparedQuery($sql);
        $habitats = $queryResponse->statement->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,"Models\Article");
        return $habitats;
    }
}