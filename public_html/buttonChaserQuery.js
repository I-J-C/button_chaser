/*Author: Jessie Collado*/
var aWidth;
var aHeight;
var timer;
var score = 0;

$(document).ready(function() {
    $("#dot").click(function () {
        if ($(this).attr('rel') === 'disabled'){
            return;
        }
        score += 1;
        $("#scoreLabel").html("Score: " + score);
    });
    start();
    $(window).resize(function () {
        continueGame();
    });
    $("#startStop").click(function () {
        if ($(this).is(':contains("STOP")')) {
            stop();
        }else{
            start();
        }
    });
});

function setGameAreaBounds() {
    aWidth = $(window).width();
    aHeight = $(window).height();
    aWidth -= 30;
    aHeight -= 95;
    $("#gameArea").css({
        "width": aWidth + 'px',
        "height": aHeight + 'px'
    });
    aWidth -= 74;
    aHeight -= 74;
    $("#scoreLabel").html("Score: " + score);
}
function moveDot() {
    var x = Math.floor(Math.random() * aWidth);
    var y = Math.floor(Math.random() * aHeight);
    if (x < 10)
        x = 10;
    if (y < 10)
        y = 10;
    $("#dot").css({
        "left": x + 'px',
        "top": y + 'px'
    });
}
function start(){
    score = 0;
    $("#dot").attr('rel', "");
    $("#startStop").html("STOP");
    continueGame();
}
function continueGame(){
    setGameAreaBounds();
    clearInterval(timer);
    timer = setInterval(moveDot, 1000);
}
function stop() {
    clearInterval(timer);
    $("#startStop").html("START");
    $("#dot").attr('rel', "disabled");
}