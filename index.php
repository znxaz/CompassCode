<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/db.php'; 


$routes = [
    '/createUser' => function() use ($pdo) {
        require __DIR__ . '/signup.php';
        signupHandler($pdo); 
    },
    '/login' => function() use ($pdo) {
        require __DIR__ . '/localauth.php';
        loginHandler($pdo);
    },
    '/forgotPassword' => function() use ($pdo) {
        require __DIR__ . '/forgot.php';
        forgorPassword($pdo);
    }
];

$currentRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (array_key_exists($currentRoute, $routes)) {
    $routes[$currentRoute](); 
} else {
    echo json_encode("Route does not exist for '$currentRoute'!");
}
