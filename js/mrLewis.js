"use strict";

$(".player-frame").hide();

$(".player-toggle").click(function () {
        $(".player-frame").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
});

$(".about").hide();
$(".about-toggle").click(function () {
    $(".about").animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});

$(".media").hide();
$(".media-toggle").click(function () {
    $(".media").animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});

