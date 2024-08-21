<?php
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

// Créer une instance du routeur et démarrer le processus de routage
$router = new Router();
$router->start();