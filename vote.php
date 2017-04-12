<?php
    require "dbhandler.php";

    try{
        $movie = $_GET["movie"];
        $poll = $_GET["poll"];
        echo vote($movie, $poll, $conn)[0];
        //echo true;
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

    $conn = null;
?>