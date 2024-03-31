<?php
require __DIR__ . '/server/dbConnect.php';
require __DIR__ . '/server/auth/signup.php';  
    
    $routes = [
        '/signup' => 'signupHandler',
    ];
    
    $currentRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); 
    
    if(array_key_exists($currentRoute, $routes)){
        $handlerFunction = $routes[$currentRoute];
        if(function_exists($handlerFunction)){
            call_user_func($handlerFunction, $pdo); 
         }else{
            echo "Handler Function does not exist for route '$currentRoute' !" ; 
         }
        }
        else{
            echo "Route does not exists for '$currentRoute' !"; 
        }
