const paddleHeight = 10;
const paddleWidth = canvas.width / 10;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function updatePaddle() {
    var touchingRightEdge = (paddleX + paddleWidth) >= canvas.width
    var touchingLeftEdge = paddleX <= 0;

    if (rightPressed && !touchingRightEdge) {
        paddleX += 7;
    } else if (leftPressed && !touchingLeftEdge) {
        paddleX -= 7;
    }

    drawPaddle(paddleX);
}

function drawPaddle(x) {
    ctx.beginPath();
    ctx.rect(x, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}