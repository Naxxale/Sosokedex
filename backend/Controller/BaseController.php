<?php namespace Controller;

use Core\HttpReqAttr;
use Core\HttpRequest;
use Core\HttpResponse;
use Model\BaseModel;
class BaseController
{
    private string $method;
    protected int $id;

    //Constructeur : Vérifie si la méthode spécifiée existe dans la classe appelée. Si ce n'est pas le cas, envoie une réponse HTTP 404.
    public function __construct($method, $id)
    {
        $this->method = $method;
        $this->id = intval($id);
        $methodNotExists = !method_exists(get_called_class(), $this->method);
        HttpResponse::SendNotFound($methodNotExists); 
        $this->id = $id; 
    }

    //Exécution de la Méthode : Appelle la méthode correspondant à la méthode HTTP spécifiée (GET, POST, PUT, DELETE) et retourne le résultat sous forme JSON.
    public function execute() : string
    {
        $result = $this->{$this->method}();
        return json_encode($result);
    }

    //Méthodes Privées pour la Gestion des Classes
    private function getBaseClassName() : string
    {
        $baseClassName = str_replace("Controller", "", get_called_class());
        return str_replace("\\", "", $baseClassName);
    }

    private function getRepositoryClassName() : string
    {
        return "Repository\\" . $this->getBaseClassName() . "Repository";
    }

    //Méthodes CRUD : Get, Post, Put, Delete
    protected function get() : array | BaseModel | null
    {
        $repositoryClassName = $this->getRepositoryClassName();
        $repository = new $repositoryClassName();
        if($this->id <= 0){
            $params = HttpRequest::get(HttpReqAttr::PARAMS);
            $models = $repository->getAll($params);
            return $models;
        }
        $model = $repository->getOneById($this->id);
        return $model;
    }

    protected function post() : array
    {
        $repositoryClassName = $this->getRepositoryClassName();
        $repository = new $repositoryClassName();
        $insertedModel = $repository->insert();
        return ["result" => $insertedModel];
    }

    protected function put() : array
    {
        $repositoryClassName = $this->getRepositoryClassName();
        $repository = new $repositoryClassName();
        $updatedModel = $repository->update($this->id);
        return ["result" => $updatedModel];
    }

    protected function delete() : array
    {
        $repositoryClassName = $this->getRepositoryClassName();
        $repository = new $repositoryClassName();
        $deleteResult = $repository->delete($this->id);
        return ["result" => $deleteResult];
    }


}