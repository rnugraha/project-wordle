import React from "react";

function GameInput({ onSubmit }) {
  const [guess, setGuess] = React.useState("");
  handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(guess);
    setGuess("");
  };
  handleOnChange = (event) => {
    // convert the guess to uppercase
    setGuess(event.target.value.toUpperCase());
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input"> Enter guess: </label>
      <input
        type="text"
        name="guess-input"
        id="guess-input"
        value={guess}
        onChange={handleOnChange}
        maxLength={5}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GameInput;
