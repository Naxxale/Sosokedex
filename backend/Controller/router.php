<?php namespace Controller;
    use Core\HttpRequest;
    use Core\HttpReqAttr;
    use Core\HttpResponse;

class Router{
    // Cette propriété va contenir une instance du contrôleur approprié, qui sera déterminé en fonction de la requête HTTP. 
    //Le type est défini comme BaseController, indiquant que tout contrôleur doit hériter de cette classe de base.
    private BaseController $controllerInstance;

    //Constructeur
    public function __construct() 
    {
        //Cette ligne extrait la première partie du chemin de la requête (c’est-à-dire la partie de l’URL après le nom de domaine)
        //Exemple : si l'URL est /pokemon/12 alors $table -> "pokemon".
        $table = HttpRequest::get(HttpReqAttr::ROUTE)[0];

        //Ce code construit dynamiquement le nom de la classe du contrôleur à utiliser. 
        //Il utilise le nom de la "table" (la première partie de l'URL) pour générer quelque chose comme "Controller\\PokemonController"
        $controllerClassName = "Controller\\".ucfirst(empty($table) ? "Home" : $table)."Controller";

        //Vérifier si la classe du contrôleur existe
        HttpResponse::SendNotFound(!class_exists($controllerClassName));

        //Cette ligne récupère la méthode HTTP (GET, POST, PUT, DELETE) de la requête et la convertit en minuscule pour être utilisée plus tard.
        $method = strtolower(HttpRequest::get(HttpReqAttr::METHOD));

        //Si l'URL contient un identifiant (par exemple /pokemon/12), cette ligne extrait cet identifiant et le convertit en entier. Si aucun identifiant n'est présent, la valeur par défaut est 0.
        $routeParams = HttpRequest::get(HttpReqAttr::ROUTE);
        $id = isset($routeParams[1]) ? intval($routeParams[1]) : 0;

        //Enfin, une instance du contrôleur est créée en utilisant la classe dynamique précédemment générée. Le constructeur du contrôleur reçoit la méthode HTTP ($method) et l'identifiant ($id).
        $this->controllerInstance = new $controllerClassName($method, $id);


    // Vérifiez si nous avons un paramètre pour le type
    if ($method === 'get' && isset($routeParams[1])) {
        $typeName = $routeParams[1];

        // Appeler la méthode getByType si elle existe
        if ($this->controllerInstance instanceof PokemonController && method_exists($this->controllerInstance, 'getByType')) {
                // Appeler getByType directement sur l'instance de PokemonController
                $this->controllerInstance = $this->controllerInstance->getByType($typeName);
        } else {
                HttpResponse::SendNotFound(true);
        }
    }
}

    public function start() : void
    {
        HttpResponse::SendOK($this->controllerInstance->execute());
    }
}