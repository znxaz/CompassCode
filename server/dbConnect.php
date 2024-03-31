<?php
// Data Source Name (DSN) specifying the database driver, host, and database name
$dsn = "mysql:host=mysql;dbname=web_project";
$username = "root"; 
$password = "root"; 

try {
    // Creating a new PDO (PHP Data Object) instance to represent a connection to the database
    $pdo = new PDO($dsn, $username, $password); 
    
    // Set an attribute on the PDO object. In this case, we're setting the error reporting mode.
    // PDO::ATTR_ERRMODE: This is used to specify the error reporting mode. The three modes are silent, warning, and exception.
    // PDO::ERRMODE_EXCEPTION: This mode throws exceptions whenever a database error occurs.
    // This means if there's an error with a query, instead of just returning false or emitting a warning,
    // an exception will be thrown which can be caught in a try-catch block.
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    
} catch(PDOException $err) {
    echo "Connection Error: " . $err->getMessage(); 
}
