/*Author: Tom Duffy*/
var score = 0;
var aWidth;
var aHeight;
var timer;
function detectHit() {
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score: " +
            score;
}
function setGameAreaBounds() {
    if (document.all) {
        aWidth = document.body.clientWidth;
        aHeight = document.body.clientHeight;
    } else {
        aWidth = innerWidth;
        aHeight = innerHeight;
    }
    aWidth -= 30;
    aHeight -= 95;
    document.getElementById("gameArea").style.width = aWidth + 'px';
    document.getElementById("gameArea").style.height = aHeight + 'px';
    aWidth -= 74;
    aHeight -= 74;
    moveDot();
}
function moveDot() {
    var x = Math.floor(Math.random() * aWidth);
    var y = Math.floor(Math.random() * aHeight);
    if (x < 10)
        x = 10;
    if (y < 10)
        y = 10;
    document.getElementById("dot").style.left = x + 'px';
    document.getElementById("dot").style.top = y + 'px';
    clearTimeout(timer);
    timer = setTimeout("moveDot()", 1000);
}