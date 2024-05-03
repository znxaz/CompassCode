<?php
require __DIR__ . '/vendor/autoload.php'; 
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


$DBUser = $_ENV["DB_USER"]; 
$DBPassword = $_ENV["DB_PASSWORD"]; 
$DSN = $_ENV["DSN"]; 

try {
    $pdo = new PDO($DSN, $DBUser, $DBPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $err) {
    die("Could not connect to the database: " . $err->getMessage());;
}