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

    // update ball position
    ballX += ballVelocityX;
    ballY += ballVelocityY; 

    // if touching borders, one of these variables will be true
    var isPastRightBorder = ballX >= canvas.width;
    var isPastLeftBorder = ballX <= 0;
    var isHittingTop = ballY >= canvas.height;
    var isHittingBottom = ballY < 0;

    if (isPastRightBorder || isPastLeftBorder) {
        ballVelocityX *= -1;
    }
    
    if (isHittingBottom || isHittingTop) {
        ballVelocityY *= -1;
    }

    var isWithinPaddleX = ballX >= paddleX && ballX <= paddleX + paddleWidth;
    var isAtSameYAsPaddle = ballY > canvas.height - paddleHeight;

    if (isWithinPaddleX && isAtSameYAsPaddle) {

        // I dare you to understand these lines; they make sense to me
        ballVelocityX = -ballVelocityX/Math.abs(ballVelocityX) * Math.round(Math.random() + 1) * 4; 
        ballVelocityY = (Math.abs(ballVelocityY) + Math.round(Math.random() * 5))/-ballVelocityY; 

        // for lesson will have these less complicated lines
        // ballVelocityX *= -1;
        // ballVelocityY *= -1;
    } 

    var isTouchingBottomOfScreen = ballY >= canvas.height;

    if (isTouchingBottomOfScreen) {
        alert("You lose!");
        reset();
    }

    // draw ball with updated position
    drawBall(ballX, ballY);
}