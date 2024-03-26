<?php
$servername = "localhost"; // Use "mysql" if your PHP runs in another Docker container in the same network
$username = "user";
$password = "password"; 
$database = "web_project"; 

$conn = new mysqli($servername, $username, $password, $database, 3308); // Port 3308 as mapped in your Docker setup

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "CREATE TABLE Users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    UserName VARCHAR(30) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Users created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
