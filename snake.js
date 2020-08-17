var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var snakeW = 10;
var snakeH = 10;

function drawSnake(x,y){
ctx.fillStyle="green";
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
ctx.fillStyle="black";
ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}

//create snake

var len = 4;
snake = [];
for(var i=len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}

for(var i=0;i<snake.length;i++){
    var X = snake[i].x;
    var Y = snake[i].y;
    drawSnake(X,Y)
}