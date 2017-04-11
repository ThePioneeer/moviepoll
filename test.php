<?php
    require "dbhandler.php";

    try{
        echo "movie1 " . $_GET["movie1"] .  "movie2 " . $_GET["movie2"] . " movie3 " . $_GET["movie3"];
        $movies = array($_GET["movie1"], $_GET["movie2"], $_GET["movie3"]);
        createMoviePoll($movies, $conn);
        //echo "Done";
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }

    $conn = null;
?>