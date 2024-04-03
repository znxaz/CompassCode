<?php
require __DIR__ . '/vendor/autoload.php'; // Fixed the missing semicolon
require __DIR__ . '/db.php'; // Make sure the file is named 'dbConnect.php'

$routes = [
    '/signup' => __DIR__ . '/signup.php', // Corrected the concatenation and removed the space
];

$currentRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (array_key_exists($currentRoute, $routes)) {
    include $routes[$currentRoute]; // Include the script for this route
    signupHandler($pdo); // Call the function directly, assuming it's defined in 'signup.php'
} else {
    echo "Route does not exist for '$currentRoute'!";
}
