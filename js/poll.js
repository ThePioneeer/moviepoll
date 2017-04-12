//POLL.JS
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";

(function(){
    var href = window.location.href;
    var poll = href.substring(href.indexOf('?') + 1);
    getMovieVotes(poll, setTitle);
})();

function getMovieVotes(pollID, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            callback(JSON.parse(xmlHttp.response));
        }
    }
    xmlHttp.open("GET", "../getmovies.php?movieid="+pollID);
    xmlHttp.send();
}

function setTitle(movies){
    for(var i = 1; i < 4; i++){
        document.getElementById("movie" + i + "-name").innerText = movies[i-1].movie_name;
        document.getElementById("movie" + i + "-count").innerText = movies[i-1].votes;
        setMovieInfo(i, movies[i-1].movie_name);
    }
}

function setMovieInfo(id, moviename, callback){
    url = REQUEST_ADDRESS + moviename;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var movie = JSON.parse(xmlHttp.response);
            document.getElementById("movie" + id + "-poster").style.backgroundImage = "url('" + movie.Poster + "')";
            document.getElementById("movie" + id + "-rating").innerText = movie.imdbRating;
            document.getElementById("movie" + id + "-year").innerText = movie.Year;
            document.getElementById("movie" + id + "-link").className = "";
            document.getElementById("movie" + id + "-link").href = "http://www.imdb.com/title/" + movie.imdbID;
        }
    }
    xmlHttp.open("GET", url);
    xmlHttp.send();
}