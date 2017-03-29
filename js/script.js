//SCRIP.JS
//var REQUEST_ADDRESS = "http://www.omdbapi.com/?s=";
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var delayTimer;

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
        console.log(id);
        var searchUrl = REQUEST_ADDRESS + document.getElementById(id+ "-input").value;
        httpGetAsync(searchUrl, setTitle, id);
    }, 500);
}

function setTitle(movie, id){
    console.log("setTitle " + movie.Title);
    if(movie.Title == undefined){
        document.getElementById(id + "-poster").style.backgroundImage = "";
        document.getElementById(id + "-rating").innerText = "-"
        document.getElementById(id + "-name").innerText = "Vali film...";
        document.getElementById(id + "-year").innerText = "";
    }else{
        document.getElementById(id + "-poster").style.backgroundImage = "url('" + movie.Poster + "')";
        document.getElementById(id + "-rating").innerText = movie.imdbRating;
        document.getElementById(id + "-name").innerText = movie.Title;
        document.getElementById(id + "-year").innerText = movie.Year;
    }
    
}