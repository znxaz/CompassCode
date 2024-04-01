<?php
function findComposerAutoload() {
    $dir = __DIR__;
    while (!file_exists($dir . '/vendor/autoload.php')) {
        $dir = dirname($dir);
        if ($dir === '/') {
            // Prevents infinite loop in case the autoload.php file is not found
            throw new Exception('Unable to locate autoload.php. Please run composer install.');
        }
    }
    return $dir . '/vendor/autoload.php';
}

require_once findComposerAutoload();

require __DIR__ . '/../dbConnect.php';
require '/var/www/vendor/autoload.php';
use Ramsey\Uuid\Uuid;
function signupHandler($pdo)
{
    try {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $username = $_POST["username"] ?? null;
            $email = $_POST["email"] ?? null;
            $password = $_POST["password"] ?? null;
            $checkUsernameQuery = $pdo->prepare(
                "SELECT username FROM users WHERE username = :username"
            );
            $checkUsernameQuery->bindParam(":username", $username);
            $checkUsernameQuery->execute();
            $userExists = $checkUsernameQuery->fetch(PDO::FETCH_ASSOC);

            if (empty($username) || empty($password) || empty($email)) {
                echo "PLease fill out the required fields";
            } elseif ($userExists) {
                echo "Username already exists, please try another one.";
            } else {
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                $uuid = Uuid::uuid4()->toString();
                $InsertUser = $pdo->prepare(
                    "INSERT INTO users (uuid, username, email, password) VALUES (?, ?, ?)"
                );
                $InsertUser->execute([$username, $email, $hashedPassword]);
            }
        } else {
            echo "Only POST requests to be handled here";
        }
    } catch (PDOException $err) {
        echo "An error occurred: " . $err->getMessage();
    }
}
