<?php namespace Core;
class HttpRequest
{
    private string $method = "";
    private array $route = [];
    private array $params = [];
    private array $body = [];
    private static $instance;
    private function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $parsed_url = parse_url(filter_var(trim($_SERVER['REQUEST_URI'], "/")));
        $this->route = explode('/', $parsed_url['path']);
        parse_str($parsed_url['query'] ?? "", $this->params);
        $this->body = filter_var_array(json_decode(file_get_contents('php://input'), true) ?? [], 
                                        FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    public static function get(HttpReqAttr $option = HttpReqAttr::INSTANCE) : string | array | HttpRequest
    {
        if (is_null(self::$instance)) {
            self::$instance = new HttpRequest();
        }
        if ($option == HttpReqAttr::INSTANCE) {
            return self::$instance;
        }
        return self::$instance->{$option->value};
    }

}

enum HttpReqAttr: string
{
    case INSTANCE = "instance";
    case METHOD = "method";
    case ROUTE = "route";
    case PARAMS = "params";
    case BODY = "body";
}