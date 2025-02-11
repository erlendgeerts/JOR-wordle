import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [winner, setWinner] = React.useState(false);
  const [guessResults, setGuessResults] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    setGuessResults([...guessResults, guess]);
    guess === answer ? setWinner(true) : setWinner(false);
  };
  return (
    <>
      <GuessResults
        guessResults={guessResults}
        answer={answer}
        winner={winner}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
