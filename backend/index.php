<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header('Access-Control-Expose-Headers: X-Total-Count');
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-Total-Count, Range");

//Inclusion des fichiers importants de l'appli (classes, fonctions, requêtes HTTP, réponses, contrôleurs, modèles et routeur)
require_once __DIR__ . '/Core/HttpRequest.php';
require_once __DIR__ . '/Core/HttpResponse.php';
require_once __DIR__ . '/Controller/BaseController.php';
require_once __DIR__ . '/Controller/PokemonController.php';
require_once __DIR__ . '/Repository/BaseRepository.php';
require_once __DIR__ . '/Repository/PokemonRepository.php';
require_once __DIR__ . '/Model/BaseModel.php';
require_once __DIR__ . '/Model/Pokemon.php';
require_once __DIR__ . '/Controller/Router.php';

//Importation de la classe Routeur
use Controller\Router;



if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Répondre immédiatement aux requêtes OPTIONS
}

function autoload($className) {
    $classFilePath = __DIR__ . "/$className.php";
    if (file_exists($classFilePath)) {
        require_once $classFilePath;
    }
}
spl_autoload_register("autoload");


// Créer une instance du routeur et démarrer le processus de routage
$router = new Router();
$router->start();