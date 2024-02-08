import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [win, setWin] = useState("");

  function submitInput(inp) {
    const upp = inp.toUpperCase();
    const newGuessList = { name: upp, id: Math.random() };
    const nextList = [...guessList, newGuessList];
    setGuessList(nextList);
    const newCorrect = checkGuess(upp, answer);
    let newWin = "";
    let br = true;
    newCorrect.forEach((element) => {
      if (element.status === "correct" && br) {
        newWin = "win";
      } else {
        newWin = "";
        br = false;
      }
    });

    setCorrect([...correct, newCorrect]);
    if (nextList.length > 5 && newWin != "win") {
      newWin = "lose";
    }
    setWin(newWin);
  }
  return (
    <>
      {win === "" && (
        <>
          <Guess guesses={guessList} correct={correct}></Guess>
          <GuessInput submitInput={submitInput}></GuessInput>
        </>
      )}
      {win === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessList.length} Guesses</strong>.
          </p>
        </div>
      )}
      {win === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
