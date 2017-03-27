//SCRIP.JS
//var REQUEST_ADDRESS = "http://www.omdbapi.com/?s=";
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var response;
var delayTimer;

document.getElementById("submit-button").addEventListener("click", function(url) {
    var url = REQUEST_ADDRESS + document.getElementById("movie1-input").value;
    httpGetAsync(url);
});

document.getElementById("movie1-input").oninput = function(){
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function(){
        var searchUrl = REQUEST_ADDRESS + document.getElementById("movie1-input").value;
        httpGetAsync(searchUrl);
        setTitle(response);
    }, 500);
};

//GET search result
function httpGetAsync(url, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
             response = JSON.parse(xmlHttp.response);
             console.log("getAsync " + response.Title);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    requestComplete = true;
}

function setTitle(movie){
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function(){
        console.log("setTitle " + movie.Title);
    }, 1000);    
}