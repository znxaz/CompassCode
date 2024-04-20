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
            $email = $data['email'] ?? null;
            $username = $data['username'] ?? null;

            if (!$email && !$username) {
                throw new Exception(json_encode("Email and username cannot be empty."));
            }

            $userExistsQuery = $pdo->prepare(
                "SELECT email FROM users WHERE email = :email OR username = :username LIMIT 1"
            );
            $userExistsQuery->bindParam(":email", $email);
            $userExistsQuery->bindParam(":username", $username);
            $userExistsQuery->execute();
            $userExists = $userExistsQuery->fetch(PDO::FETCH_ASSOC);

            if ($userExists) {
                $email = $userExists['email'];
                $mail = new PHPMailer\PHPMailer\PHPMailer(true);

                //Server settings
                $mail->SMTPDebug = 2;
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

                // Content
                $mail->isHTML(true);
                $mail->Subject = 'Password Reset Link';
                $mail->Body = 'This is a placeholder for the password reset link.'; //REPLACE WITH LINKKKKK

                $mail->send();
                echo json_encode('Reset password link has been sent.');
            } else {
                echo json_encode('No account found with that email or username.');
            }
        } catch (\PHPMailer\PHPMailer\Exception $e) {
            echo json_encode("Message could not be sent. Mailer Error: " . $mail->ErrorInfo);
        } catch (\PDOException $e) {
            echo json_encode("Database error occurred: " . $e->getMessage());
        } catch (\Exception $e) {
            echo json_encode("Error: " . $e->getMessage());
        }
    } else {
        echo json_encode("Only POST requests are handled through this route");
    }
}
