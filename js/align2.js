let btn = document.getElementById('btn');

let request = new XMLHttpRequest();
request.open("GET", "");
request.send();


const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand\n";
setInterval(generateQuote, 1000);
function generateQuote() {
    let dataNum = Math.floor(Math.random() * 10);
    if(dataNum == 4 || dataNum == 6){
        dataNum = Math.floor(Math.random() * 10);
    }
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("quote").innerHTML = data[dataNum].content.rendered;
            document.getElementById("author").innerHTML = "- " + data[dataNum].title.rendered;
        })
        .catch(function (err) {
            console.log(err);
        })
}

