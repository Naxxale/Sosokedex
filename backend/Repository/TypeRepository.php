<?php namespace Repository;

use model\Pokemon;
use PDO;
use Core\HttpReqAttr;
use Core\HttpRequest;

class TypeRepository extends BaseRepository {
    public function getAllTypes(){
        $sql = "SELECT * FROM type";
        $queryResponse = $this->preparedQuery($sql);
        $types = $queryResponse->statement->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE,"Models\Article");
        return $types;
    }
}