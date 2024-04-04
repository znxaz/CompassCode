<?php

require './db.php'; 
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function forgorPassword($pdo)
{
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        try {
            $email = $_POST["email"];
            $emailExistsQuery = $pdo->prepare(
                "SELECT email FROM users WHERE email = :email"
            );
            $emailExistsQuery->bindParam(":email", $email);
            $emailExistsQuery->execute();
            $emailExists = $emailExistsQuery->fetch(PDO::FETCH_ASSOC);

            if ($emailExists) {
                $mail = new PHPMailer\PHPMailer\PHPMailer(true); // Passing `true` enables exceptions
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
