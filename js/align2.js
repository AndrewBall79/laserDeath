let btn = document.getElementById('btn');

let request = new XMLHttpRequest();
request.open("GET", "");
request.send();


const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
setInterval(generateQuote, 1000);
function generateQuote() {
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            document.getElementById("quote").innerHTML = data.content;
            document.getElementById("author").innerHTML = "- " + data.author;
        })
        .catch(function (err) {
            console.log(err);
        })
}

