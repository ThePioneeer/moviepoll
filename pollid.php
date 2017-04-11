<?php
    require "dbhandler.php";

    try{        
        echo getLastID($conn)[0];
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

    $conn = null;
?>