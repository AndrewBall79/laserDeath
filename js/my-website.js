
$(".forefront-element").click(
function myFunction(){
    var x = document.getElementById("subH");
    if (x.innerHTML === "TO DESIGN"){
        x.innerHTML = "TO CODE";
    }else{
        x.innerHTML = "TO DESIGN";
    }
});

$("#main-header");

$(".prismGrid").hide();
$(document).ready(function() {
    $(".forefront-element").click(function () {
        $(".prismGrid, #jumbotron-container").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });
});

$(".main-contain").hide();

$(".b1").click(function() {
    $(".b1").fadeOut();
});

$(".b2").click(function() {
    $(".b2").toggleClass("b2a");
    $(".jumbotron-fluid").toggle("slow", "swing");
    $(".prismGrid").animate();
});

$(".b3").click(function() {
    $(".b3").fadeOut();
});

$(".b4").click(function() {
    $(".b4").toggleClass("b4A");
    $(".main-contain").slideToggle("slow");
});


$(".b5").click(function() {
    $(".b5").toggleClass("b5a");
    $(".image").toggle("slow");
});

$(".b6").click(function() {
    $(".main-contain").slideToggle("slow");
    $(".b6").toggleClass("b6a");
});

$(".image").hide();
$(".image").click(function () {
    $(this).hide();
});


