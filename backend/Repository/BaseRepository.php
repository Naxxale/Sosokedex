<?php namespace Repository;

use model\BaseModel;
use PDO;
use PDOException;
use Core\HttpResponse;
use Core\HttpRequest;
use Core\HttpReqAttr;

class BaseRepository {
    private static $connection = null;

    //Fonction de connexion à la BDD
    private function connect() : PDO
    {
        if (self::$connection == null) {
            include_once "./configs/db.config.php";
            $dsn = "mysql:host=".DB_HOST.";port=".DB_PORT.";dbname=".DB_NAME;
            $user = DB_USER;
            $pass = DB_PASSWORD;
            try {
                $connection = new PDO(
                    $dsn,
                    $user,
                    $pass,
                    array(
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                    )
                );
            } catch (PDOException $e) {
                $errorMessage = $e->getMessage();
                die("Erreur de connexion à la base de données : $errorMessage");
            }
            self::$connection = $connection;
        }
        return self::$connection;
    }

    //Fonction pour exécuter des requêtes SQL de manière sécurisée (éviter les injections SQL) en utilisant des requêtes préparées.
    protected function preparedQuery($sql, $params = []) : object
    {
         // 1. Prépare une requête SQL
        $statement = $this->connect()->prepare($sql);
         // 2. Exécute la requête préparée avec les paramètres fournis
        $result = $statement->execute($params);
        // 3. Retourne un objet contenant le résultat de l'exécution et le statement
        return (object)['result' => $result, 'statement' => $statement];
    }

    //Méthode pour obtenir le nom de la classe de base à partir du nom de la classe qui appelle cette méthode.
    private function getBaseClassName() : string
    {
        // 1. Retire "Repository" du nom de la classe appelée
        $baseClassName = str_replace("Repository", "", get_called_class());
        // 2. Retire les antislashs du nom de la classe
        return str_replace("\\", "", $baseClassName);
    }

    //Méthode pour générer un nom de table en se basant sur le nom de la classe courante.
    private function getTableName() : string
    {
        return lcfirst($this->getBaseClassName());
    }

    //Méthode pour générer le nom complet de la classe du modèle en fonction du nom de la classe actuelle.
    private function getModelClassName() : string
    {
        return "Model\\" . $this->getBaseClassName();
    }

    //Méthode pour récupérer  tous les éléments d'un tableau de l'api (exemple : tous les pokemons).
    public function getAll(array $params) : array
    {
        $sql = "SELECT * FROM ".$this->getTableName();
        if(isset($params['orderby'])){
            $sql .= " ORDER BY " .$params['orderby'];
            if(isset($params['sort'])){
                $sql .= " " .$params['sort'];
            }
            if(isset($params['limit'])){
                $sql .= " LIMIT " . $params['limit'];
            }
        }
        $queryResponse = $this->preparedQuery($sql);
        $models = $queryResponse->statement->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, $this->getModelClassName());
        return $models;
    }

    //Méthode pour récupérer les éléments par l'id.
    public function getOneById(int $id) : BaseModel| null
    {
        $tableName = $this->getTableName();
        $modelClassName = $this->getModelClassName();
        $queryResponse = $this->preparedQuery("SELECT * FROM $tableName WHERE id_$tableName = ?", [$id]);
        $assocArray = $queryResponse->statement->fetch(PDO::FETCH_ASSOC);
        if(!$assocArray){
            return null;
        } 
        $model = new $modelClassName($assocArray);
        return $model;
    }

    //Opération Insert : ajout à la bdd.
    public function insert() : BaseModel | false
    {
        $tableName = $this->getTableName();
        $requestBody = HttpRequest::get(HttpReqAttr::BODY);
        $modelClassName = $this->getModelClassName();
        $model = new $modelClassName($requestBody);
        $model->{"id_$tableName"} = null;
        $modelArray = get_object_vars($model);
        $columns = implode(",", array_keys($modelArray));
        $values = implode(",", array_map(function (){ return "?"; }, $modelArray));
        $params = array_values($modelArray);
        $sql = "INSERT INTO $tableName ($columns) VALUES ($values)";
        $queryResponse = $this->preparedQuery($sql, $params);
        if($queryResponse->result && $queryResponse->statement->rowCount() == 1){
            $lastInsertId = self::$connection->lastInsertId();
            $model = $this->getOneById($lastInsertId);
            return $model;
        }
        return false;
    }

    //Opération Update : maj dans la bdd. 
    public function update(int $id) : BaseModel | false
    {
        $tableName = $this->getTableName();
        $requestBody = HttpRequest::get(HttpReqAttr::BODY);
        $modelClassName = $this->getModelClassName();
        $model = new $modelClassName($requestBody);
        $where = "id_$tableName = ?";
        $modelArray = get_object_vars($model);
        unset($modelArray["id_$tableName"]);
        $set = implode(",", array_map(function ($item){ return $item."=?"; }, array_keys($modelArray)));
        $params = array_values($modelArray);
        array_push($params, $id);
        $sql = "UPDATE $tableName SET $set WHERE $where";
        $resp = $this->preparedQuery($sql, $params);
        if($resp->result && $resp->statement->rowCount() <= 1){
            $model = $this->getOneById($id);
            return $model;
        }
        return false;
    }

    //Opération Delete : suppression dans la bdd.
    public function delete(int $id) : bool
    {
        $tableName = $this->getTableName();
        $where = "id_$tableName = ?";
        $sql = "DELETE FROM $tableName WHERE $where";
        $resp = $this->preparedQuery($sql, [$id]);
        if($resp->result && $resp->statement->rowCount() <= 1){
            $model = $this->getOneById($id);
            return !isset($model);
        }
        return false;
    }
}