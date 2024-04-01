<?php
require_once '/var/www/project/bootstrap.php';

$dotenv = Dotenv\Dotenv::createImmutable('/var/www/project');
$dotenv->load();

try {
    $pdo = new PDO($_ENV['DSN'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $err) {
    echo "An error occurred: " . $err->getMessage();
    exit;
}
