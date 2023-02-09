var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var start_loc = {x:canvas.width/8 , y:canvas.height/2};
var player = {x:start_loc.x, y:start_loc.y, r:25};
var dx = 25, dy = 25;
var speed = 5;
var acceleration = 0.1;
var gameStarted = false;
var frameRate = 1000/30; // starting with 30 fps 
var score = 0;
var hasPlayedGame = false;
var obstacle_loc = [
{x:100, y:192, w:25, h:90, down:true},
{x:220, y:100, w:25, h:90, down:false},
];

var beat = new Audio('../sounds/aria_math.mp3');
var gameOver_beat = new Audio('../sounds/game_over_beat.mp3');

function moveLeft(){
    player["x"] -= dx;
    drawObstacles();
}

function moveRight(){
    player["x"] += dx;
    drawObstacles();
}

function moveUp(){
    player["y"] -= dy;
    drawObstacles();
}

function moveDown(){
    player["y"] += dy;
    drawObstacles();
}


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (name == 'ArrowUp' || name == 'w' || name == 'W')
    moveUp();
    else if(name == 'ArrowDown' || name == 's' || name == 'S')
    moveDown();
    else if(name == 'ArrowLeft' || name == 'a' || name == 'A')
    moveLeft();
    else if(name == 'ArrowRight' || name == 'd' || name == 'D')
    moveRight();    
}, false);

function startGame(){
    gameOver_beat.pause();
    gameOver_beat.currentTime = 0;
    gameStarted = true;
    hasPlayedGame = true;
    document.getElementById("score").innerHTML = 0;
    beat.play();
    speed = 5; // to initial speed  
}

function stopGame(){
    gameStarted = false;
    document.getElementById("score").innerHTML = Math.round(score);
    score = 0;
    beat.pause();
    // beat.load();
    beat.currentTime = 0;
    gameOver_beat.play();
}

function drawPlayer(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#0000FF";
    // ctx.arc(player.x, player.y, player["r"], 0, 2 * Math.PI);
    ctx.fillRect(player.x ,player.y ,player["r"],player["r"]);
    ctx.stroke();
}

function drawObstacles(down = true){
    drawPlayer();
    for(var i = 0; i < obstacle_loc.length; i++){
        ctx.fillStyle = "#FF0000";
        var x = obstacle_loc[i].x, y = obstacle_loc[i].y , w = obstacle_loc[i].w, h = obstacle_loc[i].h;
        if(down){
            ctx.fillRect(x,y,w,canvas.height - y);
        }
        else{
            ctx.fillRect(x,0,w,h);
        }    
    }   
};

function increase_obstacles_speed(){
    speed += acceleration;
};

function moveObstacles(down=true){
    // check collision while moving objects:-
    for(var i = 0; i < obstacle_loc.length; i++){
        // ctx.fillStyle = "#FF0000"; 
        if(obstacle_loc[i].x - speed < 0){
            obstacle_loc[i].x = canvas.width - obstacle_loc[i].w;
            // speed += 0.1;
            increase_obstacles_speed();
        }
        else{
            obstacle_loc[i].x -= speed;
        }
    }    
};

function refresh(){
    if(hasPlayedGame == false){
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("PRESS START", canvas.width/3, canvas.height/2);
    }
    else if(gameStarted == true){
        moveObstacles();
        drawObstacles();
        score += 0.1;
        document.getElementById("score").innerHTML = Math.round(score);
    }
    else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("GAME OVER", canvas.width/3, canvas.height/2);
        ctx.fillText("   Continue?", canvas.width/3, canvas.height/2 + 35);
        if(score != 0){
            document.getElementById("score").innerHTML = Math.round(score);
        }
    }
};



setInterval(refresh, frameRate);

