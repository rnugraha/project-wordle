import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput/GameInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState(null);

  // This function will be called when the user submits a guess.
  function handleOnSubmit(guess) {
    const newGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    const isResultCorrect = result.every(({ status }) => status === "correct");
    newGuesses.push(result);
    if (isResultCorrect) {
      // If the user has guessed the word, we'll show a success message.
      setResult({
        message: (
          <p>
            Congratulations! Got it in{" "}
            <strong>{newGuesses.length} guesses</strong>
          </p>
        ),
        type: "happy",
      });
    } else {
      if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        // If the user has run out of guesses, we'll show the solution.
        setResult({
          message: (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          ),
          type: "sad",
        });
      }
    }
    setGuesses(newGuesses);
  }

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
          return <Guess guess={guesses[index]} key={crypto.randomUUID()} />;
        })}
      </div>
      <GameInput onSubmit={handleOnSubmit} disabled={result !== null} />
      {result && <Banner message={result.message} type={result.type} />}
    </>
  );
}

export default Game;
