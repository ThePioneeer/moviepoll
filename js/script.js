//SCRIP.JS
var requestAddress = "http://www.omdbapi.com/?s="
var response;

document.getElementById("submit-button").addEventListener("click", function(url) {
    var url = requestAddress + document.getElementById("movie1").value;
    httpGetAsync(url);
});

function httpGetAsync(url, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
             response = JSON.parse(result);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}