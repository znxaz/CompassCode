<?php
require __DIR__ . '/db.php';

header('Content-Type: application/json'); 

function setCourseStatus($pdo)
{
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $jsonData = file_get_contents('php://input');
        $data = json_decode($jsonData, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400); // Bad request
            echo json_encode(['error' => 'Invalid JSON data: ' . json_last_error_msg()]);
            return;
        }

        $status = $data['status'] ?? null;
        $userID = $_SESSION['uuid'] ?? null;
        $courseID = $data['courseID'] ?? null;

        if (!$status || !$userID || !$courseID) {
            http_response_code(422); // Unprocessable Entity
            echo json_encode(['error' => 'Missing required parameters']);
            return;
        }

        try {
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $ChangeStatusQuery = $pdo->prepare(
                "INSERT INTO course_status (userID, courseID, status) VALUES (:uuid, :courseID, :status)"
            );
            $ChangeStatusQuery->bindParam(":status", $status);
            $ChangeStatusQuery->bindParam(":courseID", $courseID);
            $ChangeStatusQuery->bindParam(":uuid", $userID);
            $ChangeStatusQuery->execute();

            echo json_encode(['success' => true, 'message' => 'Status updated successfully']);
        } catch (PDOException $e) {
            http_response_code(500);
            error_log($e->getMessage());  // Log to server error log
            echo json_encode(['error' => 'Failed to update status: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(405); 
        echo json_encode(['error' => 'Invalid request method']);
    }
}

function getCourseStatus($pdo) {
    if ($_SERVER['REQUEST_METHOD'] === "GET") {
        $uuid = $_SESSION['uuid'] ?? null;
        if (!$uuid) {
            http_response_code(401); // Unauthorized
            echo json_encode(['error' => 'User not logged in']);
            return;
        }

        $getStatusQuery = $pdo->prepare("SELECT courseID, status FROM course_status WHERE userID = :uuid");
        $getStatusQuery->bindParam(":uuid", $uuid);
        $getStatusQuery->execute();
        $status = $getStatusQuery->fetch(PDO::FETCH_ASSOC);

        if ($status === false) {
            http_response_code(404); // Not found
            echo json_encode(['error' => 'No status found for the user']);
        } else {
            echo json_encode($status);
        }
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Invalid request method']);
    }
}