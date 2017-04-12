<?php
    require "dbhandler.php";

    try{
        echo getMovies($_GET['movieid'], $conn);
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

    $conn = null;
?>