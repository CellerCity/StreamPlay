import { useState, useEffect, useRef } from 'react';
import "../static/css/wordscramblegame.css"

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

export default function WordScrambleGame(){
    const [maxTime, setMaxTime] = useState(30);
    const [correctWord, setCorrectWord] = useState('');
    const [wordArray, setWordArray] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        initGame();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if(maxTime > 0) {
                setMaxTime(maxTime - 1);
            }
            else {
                clearInterval(timer);
                alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
                initGame();
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [maxTime, correctWord]);

    const initGame = () => {
        setMaxTime(30);
        let randomObj = words[Math.floor(Math.random() * words.length)];
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        setWordArray(wordArray);
        setCorrectWord(randomObj.word.toLowerCase());
        inputRef.current.value = "";
        inputRef.current.setAttribute("maxlength", randomObj.word.length);
    }

    const checkWord = () => {
        let userWord = inputRef.current.value.toLowerCase();
        if(!userWord) return alert("Please enter the word to check!");
        if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        initGame();
    }

    return (
        <div className="container">
            <h2>Word Scramble</h2>
            <div className="content">
                <p className="word">{wordArray.join("")}</p>
                <div className="details">
                    <p className="hint">Hint: <span>{correctWord ? words.find(w => w.word.toLowerCase() === correctWord).hint : ''}</span></p>
                    <p className="time">Time Left: <span><b>{maxTime}</b>s</span></p>
                </div>
                <input ref={inputRef} type="text" spellCheck={false} placeholder="Enter a valid word" />
                <div className="buttons">
                    <button className="refresh-word" onClick={initGame}>Refresh Word</button>
                    <button className="check-word" onClick={checkWord}>Check Word</button>
                </div>
            </div>
        </div>
    );
}