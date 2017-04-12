//POLL.JS
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var poll;

    document.getElementById("movie1-vote").onclick = function(){vote(1, poll, update)};
    document.getElementById("movie2-vote").onclick = function(){vote(2, poll, update)};
    document.getElementById("movie3-vote").onclick = function(){vote(3, poll, update)};

(function(){
    var href = window.location.href;
    poll = href.substring(href.indexOf('?') + 1);
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
    for(var i = 0; i < movies.length; i++){
        document.getElementById("movie" + (i+1) + "-name").innerText = movies[i].movie_name;
        document.getElementById("movie" + (i+1) + "-count").innerText = movies[i].votes;
        setMovieInfo(i+1, movies[i].movie_name);
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


function vote(movie, poll, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            document.getElementById("movie" + movie + "-count").innerText = xmlHttp.response;
        }
    }
    xmlHttp.open("GET", "../vote.php?movie="+movie+"&poll="+poll);
    xmlHttp.send();
}

function update(){

}