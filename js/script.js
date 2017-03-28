//SCRIP.JS
//var REQUEST_ADDRESS = "http://www.omdbapi.com/?s=";
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var delayTimer;

document.getElementById("movie1-input").oninput = function(){
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function(){
        var searchUrl = REQUEST_ADDRESS + document.getElementById("movie1-input").value;
        httpGetAsync(searchUrl, setTitle);
    }, 500);
};

//GET search result
function httpGetAsync(url, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
             callback(JSON.parse(xmlHttp.response));
             //console.log(xmlHttp.resonse.Title);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function setTitle(movie){
    console.log("setTitle " + movie.Title);
    document.getElementById("movie1-poster").style.backgroundImage = "url('" + movie.Poster + "')";
    document.getElementById("movie1-rating").innerText = movie.imdbRating;
    document.getElementById("movie1-name").innerText = movie.Title;
    document.getElementById("movie1-year").innerText = movie.Year;
}