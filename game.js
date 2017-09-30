var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePaddle();
    updateBall();
}

function reset() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;

    ballVelocityX = Math.round(Math.random() * 2) * Math.ceil(window.innerWidth / 500);
    ballVelocityY = Math.round(Math.random() * 2) * Math.ceil(window.innerHeight / 500);
}

setInterval(update, 10);