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
// import ScriptTag from 'react-script-tag';

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
    <table id="table">
        <tr>
            <td><img id="a" src={zero} alt="" width="60" height="auto"/></td>
            <td><img id="b" src={one} alt="" width="60" height="auto"/></td>
            <td><img id="c" src={two} alt="" width="60" height="auto"/></td>
        </tr>
        <tr>
            <td><img id="d" src={three} alt="" width="60" height="auto"/></td>
            <td><img id="e" src={four} alt="" width="60" height="auto"/></td>
            <td><img id="f" src={five} alt="" width="60" height="auto"/></td>
        </tr>
        <tr>
            <td><img id="g" src={six} alt="" width="60" height="auto"/></td>
            <td><img id="h" src={seven} alt="" width="60" height="auto"/></td>
            <td><img id="i" src={eight} alt="" width="60" height="auto"/></td>
        </tr>
    </table>
    
    <br/>

    <button id="start" onclick="gameStart()">START</button> 
    <button id="reset" onclick="resetBoard()">RESET</button>
    <button id="stop" onclick="exitGame()">FORFEIT</button>
    <h4>Use WSAD or arrow keys to move the blank tile.</h4>
    <hr/>

    <script src="static/js/8PuzzleHelper.js"></script>

</body>
</html>
    );
}

export default Puzzle8;