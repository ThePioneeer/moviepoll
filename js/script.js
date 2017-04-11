//SCRIP.JS
//var REQUEST_ADDRESS = "http://www.omdbapi.com/?s=";
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var delayTimer;

document.getElementById("submit-button").onclick = function(){
    createPoll();
}

//GET search result
function httpGetAsync(url, callback, id){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
             callback(JSON.parse(xmlHttp.response), id);
        }
    }
    xmlHttp.open("GET", url);
    xmlHttp.send();
}

function findMovie(id) {    
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function(){
        var searchUrl = REQUEST_ADDRESS + document.getElementById(id+ "-input").value;
        httpGetAsync(searchUrl, setTitle, id);
    }, 500);
}

function setTitle(movie, id){
    if(movie.Title == undefined){
        document.getElementById(id + "-poster").style.backgroundImage = "";
        document.getElementById(id + "-rating").innerText = "-"
        document.getElementById(id + "-name").innerText = "Palun vali film...";
        document.getElementById(id + "-year").innerText = "";
        document.getElementById(id + "-link").className = "disabled";
        document.getElementById(id + "-link").href = "javascript:";
    }else{
        document.getElementById(id + "-poster").style.backgroundImage = "url('" + movie.Poster + "')";
        document.getElementById(id + "-rating").innerText = movie.imdbRating;
        document.getElementById(id + "-name").innerText = movie.Title;
        document.getElementById(id + "-year").innerText = movie.Year;
        document.getElementById(id + "-link").className = "";
        document.getElementById(id + "-link").href = "http://www.imdb.com/title/" + movie.imdbID;
    }    
}

function createPoll() {
    var x = document.getElementById("movie3-input").value;
    var y = document.getElementById("movie2-input").value;
    var z = document.getElementById("movie1-input").value;

    if(x == "" || y == "" || z == ""){
        alert("Palun sisesta kõik filmid");
        return false;
    }else{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("texxt").innerHTML = this.responseText;
            }
        };
        xmlHttp.open("GET", "test.php?movie1="+z+"&movie2="+y+"&movie3="+x);
        xmlHttp.send();
    }
}