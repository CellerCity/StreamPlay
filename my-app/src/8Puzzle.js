import React from "react";
import zero from './static/img/numbers/blank.png'
import one from './static/img/numbers/1.png'
import two from './static/img/numbers/2.png'
import three from './static/img/numbers/3.png'
import four from './static/img/numbers/4.png'
import five from './static/img/numbers/5.png'
import six from './static/img/numbers/6.png'
import seven from './static/img/numbers/7.png'
import eight from './static/img/numbers/8.png'

var resources = [
    zero,one,two,three,four,five,six,seven,eight
    ]
var nums = [0,1,2,3,4,5,6,7,8];
var boardInteractible = false;
var timeElapsed = 0;
var hasWon = false;
var currentConfig = [
[0,1,2],
[3,4,5],
[6,7,8]
]; // will store  the current configuration of the 8 puzzle problem
var zeroPos = {i:0, j:0}; // to track the position of blank(0)
    
function Puzzle8(){
    // return (<h1>HELLO WORKD</h1>);
    return (
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>8 Puzzle Game</title>

</head>
<body>
    <h1>The 8 Puzzle Game</h1>
    <hr/>

    <pre>Time Elapsed:  <div style={{display: "inline"}} id="clock">0</div> s</pre>
    
    <h2 id="msg" style={{'font-family': 'Comic Sans MS', 'color':'rgb(14, 173, 40)'}}></h2>
    <div id="table-div">
        <TableComponent/>
    </div>

    
    <br/>

    <button id="start" onClick={() => gameStart()}>START</button> 
    <button id="reset" onClick={() => resetBoard()}>RESET</button>
    <button id="stop" onClick={() => exitGame()}>FORFEIT</button>
    <h4>Use WSAD or arrow keys to move the blank tile.</h4>
    <hr/>
</body>
</html>
    );
}

function TableComponent(){
    return(
        <table id="table">
        <tbody>

        <tr>
            <td><img id="a" src={resources[currentConfig[0][0]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="b" src={resources[currentConfig[0][1]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="c" src={resources[currentConfig[0][2]]} alt="some-no." width="60" height="auto"/></td>
        </tr>
        <tr>
            <td><img id="d" src={resources[currentConfig[1][0]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="e" src={resources[currentConfig[1][1]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="f" src={resources[currentConfig[1][2]]} alt="some-no." width="60" height="auto"/></td>
        </tr>
        <tr>
            <td><img id="g" src={resources[currentConfig[2][0]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="h" src={resources[currentConfig[2][1]]} alt="some-no." width="60" height="auto"/></td>
            <td><img id="i" src={resources[currentConfig[2][2]]} alt="some-no." width="60" height="auto"/></td>
        </tr>
        </tbody>
    </table>
    )
};



    function generateRandomNumberNo(a, b){
        // generates random integer between a & b inclusive (a >= b)
        return Math.floor(Math.random() * b) + a;
    };
    
    function isValidConfig(arr){
        var inv=0;
        for(var i=0; i<9; i++){
            for(var j=i+1; j<9; j++){
                if(arr[i] !== 0 && arr[j] !== 0 && arr[j] > arr[i])
                    inv += 1;
            }
        }
        if(inv % 2 !== 0 || isWinner())
            return false;
        return true;
    };
    
    function gameStart(){
        // generating random instance of 8-puzzle problem
        console.log("Game started");
        timeElapsed = 0;
        boardInteractible = true;
        if (document.getElementById("start"))
            document.getElementById("start").style.display = "none";
        if(document.getElementById("clock"))
            document.getElementById("clock").innerHTML = timeElapsed;
        if(document.getElementById("msg"))
            document.getElementById("msg").innerHTML = "";
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
                if(currentConfig[i][j] === 0){
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
                if(currentConfig[i][j] !== 0 && currentConfig[i][j] !== i*3 + j + 1)
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
        if(document.getElementById("msg"))
            document.getElementById("msg").innerHTML = "";
        if(hasWon)
            window.location.reload();
        else
            gameStart();
    };
    
    function exitGame(){
        boardInteractible = false;
        if(document.getElementById("msg"))
            document.getElementById("msg").innerHTML = "Don't give up. Try again!";
        
    };
    
    function displayConfig(){
        console.log("display config is called");
        if(document.getElementById("table-div"))
            document.getElementById("table-div").innerHTML = `<TableComponent/>`;
        // if(document.getElementById("a")){
        //     document.getElementById("a").src = {eight};
        
        // document.getElementById("b").src = resources[currentConfig[0][1]];
        // document.getElementById("c").src = resources[currentConfig[0][2]];
        
        // document.getElementById("d").src = resources[currentConfig[1][0]];
        // document.getElementById("e").src = resources[currentConfig[1][1]];
        // document.getElementById("f").src = resources[currentConfig[1][2]];
        
        // document.getElementById("g").src = resources[currentConfig[2][0]];
        // document.getElementById("h").src = resources[currentConfig[2][1]];
        // document.getElementById("i").src = resources[currentConfig[2][2]];
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
        // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
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
            if(document.getElementById("clock"))
                document.getElementById("clock").innerHTML = timeElapsed;
        }
    };
    




export default Puzzle8;