<?php namespace Core;

class HttpResponse
{

    public static function SendNotFound(bool $condition = true){
        if($condition){
            header('HTTP/1.1 404 Not Found');
            die();
        }
    }
    public static function SendOK(string $content = null, bool $condition = true){
        if($condition){
            header('HTTP/1.1 200 OK');
            if(isset($content)) echo $content;
            die();
        }
    }
}