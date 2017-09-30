// Setting up how fast, what direction, and where our ball is

// positive/negative number represents direction; higher numbers == faster
var ballVelocityX = 4;
var ballVelocityY = 4;

var ballX = 50;
var ballY = 50;

function drawBall(x, y) {
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
}

function updateBall() {
    // put your code here
    
    
}
