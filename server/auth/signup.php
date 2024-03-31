<?php
require '../dbConnect.php'; 
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
                $InsertUser = $pdo->prepare(
                    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
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
