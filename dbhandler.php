<?php
    $servername = "localhost";
    $username = "root";
    $password = "";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=moviepoll", $username, $password);
        //set PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected";
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }

    function createMoviePoll ($movies, $connection){
        createPoll($connection);
        $lastID = getLastID($connection)[0];

        for($i = 0; $i < 3; $i++){
            $order = $i + 1;
            addAnswerOption($movies[$i], $lastID, $order , $connection);
        }
    }

    function getLastID($connection){
        $sql = "SELECT MAX(id) FROM poll_questions";
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        return $stmt->fetch();
    }

    function createPoll($connection){
        $startDate = date("Y-m-d");
        $endDate = date("Y-m-d", strtotime($startDate . ' + 10 days'));
        $sql = "INSERT INTO poll_questions(start_time, end_time) VALUES('$startDate', '$endDate')";
        $connection->exec($sql);
    }

    function addAnswerOption($movieName, $pollID, $movieOrder, $connection){
        $date = date("Y-m-d");
        $sql = "INSERT INTO poll_answers(movie_name, question_ID, movie_order, created) VALUES('$movieName', '$pollID', '$movieOrder', '$date')";
        $connection->exec($sql);
    }

    function getMovies($pollID, $connection){
        $sql = "SELECT movie_name, votes FROM poll_answers WHERE question_ID = $pollID";
        $stmt = $connection->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll();

        return json_encode($result);        
    }

    function vote($movie, $poll, $connection){
        $sql = "UPDATE poll_answers SET votes = votes + 1 WHERE movie_order = '$movie' AND question_ID = '$poll'";
        $connection->exec($sql);

        $sql = "SELECT votes FROM poll_answers WHERE movie_order = '$movie' AND question_ID = '$poll'";
        $stmt = $connection->prepare($sql);
        $stmt->execute();

        return $stmt->fetch(); 
    }
?>