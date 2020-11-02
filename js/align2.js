let btn = document.getElementById('btn');

let request = new XMLHttpRequest();
request.open("GET", "");
request.send();


const url = "https://api.quotable.io/random";
setInterval(generateQuote, 10000);
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

