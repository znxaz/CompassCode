<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/db.php';
use Ramsey\Uuid\Uuid;

function signupHandler($pdo)
{
    try {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $jsonData = file_get_contents('php://input'); 
            $data = json_decode($jsonData,true);
            $_REQUEST = $data; 
            $username = $_REQUEST["username"] ?? null;
            $email = $_REQUEST["email"] ?? null;
            $password = $_REQUEST["password"] ?? null;

            if (empty($username) || empty($password) || empty($email)) {
                echo json_encode("Please fill out the required fields.") ;
                return; 
            }

            $checkUsernameQuery = $pdo->prepare(
                "SELECT username FROM users WHERE username = :username"
            );
            $checkUsernameQuery->bindParam(":username", $username);
            $checkUsernameQuery->execute();
            $userExists = $checkUsernameQuery->fetch(PDO::FETCH_ASSOC);

            if ($userExists) {
                echo json_encode("Username already exists, please try another one.");
                return; 
            }

            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $uuid = Uuid::uuid4()->toString();

            $insertUser = $pdo->prepare(
                "INSERT INTO users (uuid, username, email, password) VALUES (?, ?, ?, ?)"
            );
            $insertUser->execute([$uuid, $username, $email, $hashedPassword]);
            echo json_encode([
                'success' => true,
                'message' => 'Successfully logged in.',
            ]);

        } else {
            echo json_encode("Only POST requests are handled here.");
        }
    } catch (PDOException $err) {
        echo json_encode("An error occurred: " . $err->getMessage());
    }
}
