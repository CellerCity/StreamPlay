
var resources = [
"../img/numbers/blank.png",
"../img/numbers/1.png",
"../img/numbers/2.png",
"../img/numbers/3.png",
"../img/numbers/4.png",
"../img/numbers/5.png",
"../img/numbers/6.png",
"../img/numbers/7.png",
"../img/numbers/8.png",
]
var nums = [0,1,2,3,4,5,6,7,8];
var boardInteractible;
var timeElapsed;
var hasWon = false;
var currentConfig = [
[0,1,2],
[3,4,5],
[6,7,8]
]; // will store  the current configuration of the 8 puzzle problem
var zeroPos = {i:0, j:0}; // to track the position of blank(0)

function generateRandomNumberNo(a, b){
    // generates random integer between a & b inclusive (a >= b)
    return Math.floor(Math.random() * b) + a;
};

function isValidConfig(arr){
    var inv=0;
    for(var i=0; i<9; i++){
        for(var j=i+1; j<9; j++){
            if(arr[i] != 0 && arr[j] != 0 && arr[j] > arr[i])
                inv += 1;
        }
    }
    if(inv % 2 != 0 || isWinner())
        return false;
    return true;
};

function gameStart(){
    // generating random instance of 8-puzzle problem
    timeElapsed = 0;
    document.getElementById("start").style.display = "none";
    document.getElementById("clock").innerHTML = timeElapsed;
    document.getElementById("msg").innerHTML = "";
    boardInteractible = true;
    var arr, res;
    var i;
    while(true){
        arr = [...nums];
        res = [];
        while(arr.length){
            i = generateRandomNumberNo(0,arr.length);
            res.push(arr[i]);
            arr.splice(i,1);
        }
        if(isValidConfig(res)){
            break;
            //console.log("valid config");
        }
        //else{
        //    console.log("invalid config");
        //}
    }
    //console.log(res);
    //console.log("result length: ");
    //console.log(res.length);
    
    // saving the result as global matrix
    currentConfig = [[],[],[]];
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            currentConfig[i][j] = res[i*3 + j];
            if(currentConfig[i][j] == 0){
                zeroPos.i = i;
                zeroPos.j = j;
            }
        }
    }

    /*
    console.log(currentConfig[0]);
    console.log(currentConfig[1]);
    console.log(currentConfig[2]);
    */
    displayConfig();
    console.log("Zero position");
    console.log(zeroPos.i);
    console.log(zeroPos.j);
    
};

function isWinner(){
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            if(currentConfig[i][j] != 0 && currentConfig[i][j] != i*3 + j + 1)
                return false;
        }
        hasWon = true;
    }
    return true;
};

function checkDisplayWinner(){
    if(isWinner()){
    // the player has won. display the winning message and clear the board (make it un-interactive)
        document.getElementById("msg").innerHTML = "Congratulations! You won.";
        boardInteractible = false;
    }
};

function resetBoard(){
    boardInteractible = false;
    document.getElementById("msg").innerHTML = "";
    if(hasWon)
        location.reload();
    else
        gameStart();
};

function exitGame(){
    boardInteractible = false;
    document.getElementById("msg").innerHTML = "Don't give up. Try again!";
    
};

function displayConfig(){
    document.getElementById("a").src = resources[currentConfig[0][0]];
    document.getElementById("b").src = resources[currentConfig[0][1]];
    document.getElementById("c").src = resources[currentConfig[0][2]];
    
    document.getElementById("d").src = resources[currentConfig[1][0]];
    document.getElementById("e").src = resources[currentConfig[1][1]];
    document.getElementById("f").src = resources[currentConfig[1][2]];
    
    document.getElementById("g").src = resources[currentConfig[2][0]];
    document.getElementById("h").src = resources[currentConfig[2][1]];
    document.getElementById("i").src = resources[currentConfig[2][2]];
    /*
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            console.log(resources[config[i][j]]);
        }
    }
    console.log("First row done");
    console.log("Second row done");
    console.log("Third row done");
    */
};

function moveUp(){
    var i = zeroPos.i, j = zeroPos.j, temp;
    if(i!=0){
        temp = currentConfig[i][j];
        currentConfig[i][j] = currentConfig[i-1][j];
        currentConfig[i-1][j] = temp;
        zeroPos.i = i-1;
        displayConfig();
        checkDisplayWinner();
    }
    //console.log("UP");
};

function moveDown(){
    var i = zeroPos.i, j = zeroPos.j, temp;
    if(i!=2){
        temp = currentConfig[i][j];
        currentConfig[i][j] = currentConfig[i+1][j];
        currentConfig[i+1][j] = temp;
        zeroPos.i = i+1;
        displayConfig();
        checkDisplayWinner();
    }
    //console.log("UP");
};

function moveLeft(){
    var i = zeroPos.i, j = zeroPos.j, temp;
    if(j!=0){
        temp = currentConfig[i][j];
        currentConfig[i][j] = currentConfig[i][j-1];
        currentConfig[i][j-1] = temp;
        zeroPos.j = j-1;
        displayConfig();
        checkDisplayWinner();
    }
    //console.log("UP");
};

function moveRight(){
    var i = zeroPos.i, j = zeroPos.j, temp;
    if(j!=2){
        temp = currentConfig[i][j];
        currentConfig[i][j] = currentConfig[i][j+1];
        currentConfig[i][j+1] = temp;
        zeroPos.j = j+1;
        displayConfig();
        checkDisplayWinner();
    }
    //console.log("UP");
};


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if(boardInteractible){
        if (name == 'ArrowUp' || name == 'w' || name == 'W')
            moveUp();
        else if(name == 'ArrowDown' || name == 's' || name == 'S')
            moveDown();
        else if(name == 'ArrowLeft' || name == 'a' || name == 'A')
            moveLeft();
        else if(name == 'ArrowRight' || name == 'd' || name == 'D')
            moveRight();    
    }
    
}, false);

setInterval(increaseTime, 1000);

function increaseTime(){
if(boardInteractible){
    timeElapsed += 1;
    document.getElementById("clock").innerHTML = timeElapsed;
}
};
