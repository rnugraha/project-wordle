import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput/GameInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleOnSubmit(guess) {
    const newGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    newGuesses.push(result);
    setGuesses(newGuesses);
  }
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
          return <Guess guess={guesses[index]} key={crypto.randomUUID()} />;
        })}
      </div>
      <GameInput onSubmit={handleOnSubmit} />
    </>
  );
}

export default Game;
