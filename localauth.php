<?php 
require __DIR__ . '/db.php';

function loginHandler($pdo){
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $username = $_POST["username"] ?? null; 
        $password = $_POST["password"] ?? null;

        try{
            $checkUsernameQuery = $pdo->prepare(
                "SELECT username, password FROM users WHERE username = :username"
            );
            $checkUsernameQuery->bindParam(":username", $username);
            $checkUsernameQuery->execute();
            $user = $checkUsernameQuery->fetch(PDO::FETCH_ASSOC); 
            if($user && password_verify($password, $user['password'])){
                echo "Successfully Logged in!"; 
            } else {
                echo "Incorrect username or password."; 
            }
        } catch(PDOException $err){
            echo "An error occurred: " . $err->getMessage(); 
        }
    } else {
        echo "This route only handles POST requests."; 
    }
}
