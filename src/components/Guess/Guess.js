import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${result && result[num].status}`}>
          {result ? result[num].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
