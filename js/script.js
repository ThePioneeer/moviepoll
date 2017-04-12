//SCRIP.JS
//var REQUEST_ADDRESS = "http://www.omdbapi.com/?s=";
var REQUEST_ADDRESS = "http://www.omdbapi.com/?t=";
var delayTimer;
var questionID;

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
    var x = document.getElementById("movie1-name").innerText;
    var y = document.getElementById("movie2-name").innerText;
    var z = document.getElementById("movie3-name").innerText;

    var x_in = document.getElementById("movie1-input").value;
    var y_in = document.getElementById("movie2-input").value;
    var z_in = document.getElementById("movie3-input").value;

    if(x_in == "" || y_in == "" || z_in == ""){
        alert("Palun sisesta kõik filmid");
        return false;
    }else{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                if(this.responseText == true){
                    generateUrl();
                }else{
                    alert("Midagi läks valesti, proovi uuesti createpoll :(");
                }
            }
        };
        xmlHttp.open("GET", "createpoll.php?movie1="+x+"&movie2="+y+"&movie3="+z);
        xmlHttp.send();        
    }
}

function generateUrl(){
    var xmlHttp2 = new XMLHttpRequest();
        xmlHttp2.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                window.location.replace("vote/?" + this.responseText); 
            }
        };
    xmlHttp2.open("GET", "pollid.php");
    xmlHttp2.send();
}