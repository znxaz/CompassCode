<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/db.php'; 


$routes = [
    '/signup' => function() use ($pdo) {
        require __DIR__ . '/signup.php';
        signupHandler($pdo); 
    },
    '/login' => function() use ($pdo) {
        require __DIR__ . '/localauth.php';
        loginHandler($pdo);
    },
    '/forgor' => function() use ($pdo) {
        require __DIR__ . '/forgor.php';
        forgorPassword($pdo);
    }
];

$currentRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (array_key_exists($currentRoute, $routes)) {
    $routes[$currentRoute](); 
} else {
    echo "Route does not exist for '$currentRoute'!";
}
