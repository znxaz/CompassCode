<?php 
require __DIR__ . '/db.php';
function loginHandler($pdo){
    $username = $_GET['username']; 
    $password = $_GET['password'];
    try{
        if($_SERVER["REQUEST_METHOD"] === "GET"){
        $checkUsernameQuery = $pdo->prepare(
            "SELECT username FROM users WHERE username = :username"
        );
        $checkUsernameQuery->bindParam(":username", $username);
        $checkUsernameQuery->execute();
        $userExists = $checkUsernameQuery->fetch(PDO::FETCH_ASSOC);

        if($userExists){
            $hashedPasswordQuery = $pdo->prepare(
                "SELECT password FROM users where username = :username;"); 
            $hashedPasswordQuery->bindParam(':username', $username); 
            $hashedPassword = $hashedPasswordQuery->fetch(PDO::FETCH_ASSOC); 
            if(password_verify($password, $hashedPassword)){
                echo "Successfully Logged in!"; 

            }
            else{
                echo "boohoo loser stay out!"; 
            }
        }
    }
    else{
        throw new ErrorException("This route '__DIR__' only hanldes GET requests"); 
    }
    }catch(PDOException $err){
        echo "An error has occurred while trying to log in '$err'"; 
    }
}

 

