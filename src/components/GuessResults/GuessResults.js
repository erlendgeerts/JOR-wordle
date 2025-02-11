import React from "react";
import Guess from "../Guess";
import Score from "../Score";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessResults, answer, winner }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} word={guessResults[num]} answer={answer} />
        ))}
      </div>
      {winner || guessResults.length === NUM_OF_GUESSES_ALLOWED ? (
        <Score times={guessResults.length} answer={answer} winner={winner} />
      ) : null}
    </>
  );
}

export default GuessResults;
