
import '../static/css/wordguessinggame.css';
import { useEffect } from 'react';

function WordGuessingGame() {



useEffect(() => {

    let words = [
        {
            word: "addition",
            hint: "The process of adding numbers"
        },
        {
            word: "meeting",
            hint: "Event in which people come together"
        },
        {
            word: "number",
            hint: "Math symbol used for counting"
        },
        {
            word: "exchange",
            hint: "The act of trading"
        },
        {
            word: "canvas",
            hint: "Piece of fabric for oil painting"
        },
        {
            word: "garden",
            hint: "Space for planting flower and plant"
        },
        {
            word: "position",
            hint: "Location of someone or something"
        },
        {
            word: "feather",
            hint: "Hair like outer covering of bird"
        },
        {
            word: "comfort",
            hint: "A pleasant feeling of relaxation"
        },
        {
            word: "tongue",
            hint: "The muscular organ of mouth"
        },
        {
            word: "expansion",
            hint: "The process of increase or grow"
        },
        {
            word: "country",
            hint: "A politically identified region"
        },
        {
            word: "group",
            hint: "A number of objects or persons"
        },
        {
            word: "taste",
            hint: "Ability of tongue to detect flavour"
        },
        {
            word: "store",
            hint: "Large shop where goods are traded"
        },
        {
            word: "field",
            hint: "Area of land for farming activities"
        },
        {
            word: "friend",
            hint: "Person other than a family member"
        },
        {
            word: "pocket",
            hint: "A bag for carrying small items"
        },
        {
            word: "needle",
            hint: "A thin and sharp metal pin"
        },
        {
            word: "expert",
            hint: "Person with extensive knowledge"
        },
        {
            word: "statement",
            hint: "A declaration of something"
        },
        {
            word: "second",
            hint: "One-sixtieth of a minute"
        },
        {
            word: "library",
            hint: "Place containing collection of books"
        },
    ]
    
    function randomWord() {
        let ranItem = words[Math.floor(Math.random() * words.length)];
        word = ranItem.word;
        maxGuesses = word.length >= 5 ? 8 : 6;
        correctLetters = []; incorrectLetters = [];
        hintTag.innerText = ranItem.hint;
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    
        let html = "";
        for (let i = 0; i < word.length; i++) {
            html += `<input type="text" disabled>`;
            inputs.innerHTML = html;
        }
    }
    
    function initGame(e) {
        let key = e.target.value.toLowerCase();
        if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
            if(word.includes(key)) {
                for (let i = 0; i < word.length; i++) {
                    if(word[i] == key) {
                        correctLetters += key;
                        inputs.querySelectorAll("input")[i].value = key;
                    }
                }
            } else {
                maxGuesses--;
                incorrectLetters.push(` ${key}`);
            }
            guessLeft.innerText = maxGuesses;
            wrongLetter.innerText = incorrectLetters;
        }
        typingInput.value = "";
    
        setTimeout(() => {
            if(correctLetters.length === word.length) {
                alert(`Congrats! You found the word ${word.toUpperCase()}`);
                return randomWord();
            } else if(maxGuesses < 1) {
                alert("Game over! You don't have remaining guesses");
                for(let i = 0; i < word.length; i++) {
                    inputs.querySelectorAll("input")[i].value = word[i];
                }
            }
        }, 100);
    }

    const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input");

    resetBtn.addEventListener("click", randomWord);
    typingInput.addEventListener("input", initGame);
    inputs.addEventListener("click", () => typingInput.focus());
    document.addEventListener("keydown", () => typingInput.focus());

    let word, maxGuesses, incorrectLetters = [], correctLetters = [];
    randomWord();
}, [])




  return (
  <body>
    <div class="wrapper">
      <h1>Guess the Word</h1>
      <div class="content">
        <input type="text" class="typing-input" maxlength="1" />
        <div class="inputs"></div>
        <div class="details">
          <p class="hint">Hint: <span></span></p>
          <p class="guess-left">Remaining guesses: <span></span></p>
          <p class="wrong-letter">Wrong letters: <span></span></p>
        </div>
        <button class="reset-btn">Reset Game</button>
      </div>
    </div>

  </body>
  );
}

export default WordGuessingGame;
