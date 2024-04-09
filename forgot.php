<?php

require './db.php'; 
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function forgorPassword($pdo)
{
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        try {
            $jsonData = file_get_contents('php://input'); 
            $data = json_decode($jsonData, true); 
            $_REQUEST = $data; 
            $email = $_REQUEST['email']; 
            $username = $_REQUEST['username']; 
            $userExistsQuery = $pdo->prepare(
                "SELECT email FROM users WHERE email = :email OR username = :username"
            );
            $userExistsQuery->bindParam(":email", $email);
            $userExistsQuery->bindParam(":username", $username);
            $userExistsQuery->execute();
            $userExists = $userExistsQuery->fetch(PDO::FETCH_ASSOC);
            if ($userExists) {
                $email = $userExists['email'];
                $mail = new PHPMailer\PHPMailer\PHPMailer(true); 
                $mail->isSMTP();
                $mail->Host = 'smtp.office365.com';
                $mail->SMTPAuth = true; 
                $mail->Username = $_ENV["EMAIL"];
                $mail->Password = $_ENV["EMAIL_PASSWORD"];
                $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;

                // Recipients
                $mail->setFrom($_ENV["EMAIL"], 'Compass Code');
                $mail->addAddress($email); 

                $mail->isHTML(true); 
                $mail->Subject = 'Password Reset Link';
                $mail->Body    = 'some link boss'; //ADD LINK HERE!!!!!!!!!

                $mail->send();
                echo 'Reset password link has been sent.';
            } else {
                echo 'Email not found.';
            }
        } catch (Exception $err) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        } catch (PDOException $e) {
            echo "Database error occurred: " . $e->getMessage();
        }
    } else {
        echo "Only POST requests are handled through this route";
    }
}
