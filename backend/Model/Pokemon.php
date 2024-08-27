<?php namespace model;

class Pokemon extends BaseModel
{
    public ?int $Id_Pokemon;
    public ?string $nom_pokemon;
    public ?string $img_src;
    public ?int  $Id_habitats;
    public ?int $Id_Type;

}