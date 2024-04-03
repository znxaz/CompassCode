<?php 
//_GET is a global array that contains all query string parameters passed in the URL 
if (isset($_GET['file']) && is_string($_GET['file'])){

    //example URL: http://example.com/index.php?name=John
    //$_GET['name'] will contain the value "John"

    $file = preg_replace('/[^a-zA-Z0-9_-]/', '', $_GET['file']);

    //__DIR__ is a magic constant that in this case returns the directory it is in 
    $path = __DIR__ . '/../server/' . $file . '.php'; 

    if(file_exists($path)){
        include_once $path; 
    }
    else{
        echo "Requested file not found"; 
    }
}    
else{
    echo "Invalid Request"; 
}

?>