<?php namespace model;

class BaseModel{
    function __construct($fields = []) {
        //Cette boucle parcourt le tableau $fields, où $k représente la clé (le nom de la propriété) et $v représente la valeur correspondante.
        foreach($fields as $k => $v){
            //La fonction property_exists() vérifie si la classe actuelle ($this) possède une propriété nommée $k.
            if(property_exists($this, $k)){
                //Si la condition précédente est vraie, cette ligne assigne la valeur $v à la propriété de l'objet qui porte le nom $k dans le tableau $fields.
                //Par exemple, si $k est "name" et $v est "Pikachu", alors cette ligne assignera "Pikachu" à la propriété $this->name.
                $this->{$k} = $v;
            }
        }
    }
}