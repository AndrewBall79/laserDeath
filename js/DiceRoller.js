function matchHouses(step) {
    if (step > 0) {
        return (step * 5) + 1
    } else {
        return 0
    }
}


(function () {

    var html = '';
    var numberArray = [];
    var numberList = document.getElementById("number-list");
    var total = document.getElementById("number-total");
    var listener = function (event) {
        numberArray.push(listOfRollsFromDieFunc());


        total.innerHTML = '<div>' + numberArray.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0) + "</div>";
        for (var i = 0 ; i < numberArray.length ; i++ ) {
            numberList.innerHTML = '<div class="box">' + numberArray + '</div>' ;
        }
    };
    document.getElementById('button').addEventListener('click', listener, false);

    // changes the main background of mainHeader when dice are rolled
    $('#button').click(function () {
        var boxDiv = 'box' + numberList.innerText;
        var color = $(boxDiv).css("background-color");
        $('#main-header1').css('background', color);
        $(".main-header").css({"font-size": "20px"});
        // console.log(color);
    });

    //this will eventually do something with the grid, hopefully


    // dice shaker dice shaker audio
    var box = document.getElementById("boox");
    var grid = function (event) {
        box.id = "boox" + numberList.innerText;
        $('audio#dice')[0].play();
        // console.log(box.id);
    };
    document.getElementById('button').addEventListener('click', grid, false);


// gets the individual divs to send their colors to the header


    $(".container1").click(function () {
        var color = $(this).css("background-color");
        $("#main-header1").css('background', color);
        console.log(color);
    });


    //the dice roll function in a nutshell

    var numberOfRolls = document.getElementById('mySelect2');
    var diceFunction = document.getElementById('mySelect');

    function listOfRollsFromDieFunc() {
        var dieChosen = diceFunction.value;
        var rollAmount = numberOfRolls.value;
        var diceArray = [];
        for (var i = 0; i < rollAmount; i++) {
            diceArray.push(Math.floor(Math.random() * dieChosen) + 1);
        }
        console.log(diceArray);
        return diceArray
    }
})();


//some jQuery styling to use or not to use

$('.border').css({
    'border': '1px solid #F00',
    'font-family': 'helvetica',
    'border-radius': '4px',
    'padding': '6px',
    'box-shadow': '0px 0px 5px goldenrod'
});
$('.underestimate').css({'color': 'white', 'background-color': 'grey'});
$('.important').css({'background-color': 'darkgrey', 'font-size': '25px', 'font-family': 'century'});
$('.codeup').css('border', '4px solid red');
$('.inferno').css({'background': 'red', 'color': 'white', 'width': '100%', 'box-shadow': '-2px -2px 5px grey'});
$('.competent').css({'width': '98%', 'background': 'goldenrod', 'padding': '4px'});


// this is the main-header1 roll over dice and the color swap


$('#main-header1').hover(
    function () {
        // $('audio#dice')[0].play();

        $(this).css({'color': 'goldenrod'});
        // $(this).css()
    },
    function () {
        $(this).css('color', 'white');
    }
);
$('#main-header').hover(
    function () {
        $(this).css('color', 'goldenrod');
        $(this).fadeIn(200);

        // $(this).css()
    },
    function () {
        $(this).css('color', 'white');
    }
);

// container rollover animation

$(".container1").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});
