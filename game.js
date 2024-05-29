// game.js

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const gameContainer = document.getElementById('gameContainer');
    
    canvas.width = gameContainer.clientWidth;
    canvas.height = gameContainer.clientHeight;
    gameContainer.appendChild(canvas);
    
    // Simple example game: bouncing ball
    let ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: 2,
        dy: 2,
        radius: 20
    };
    
    function drawBall() {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }
        
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }
        
        requestAnimationFrame(update);
    }
    
    update();
});
