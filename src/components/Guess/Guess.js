import React from "react";

function Guess({ guess }) {
  if (!guess?.length || guess.length !== 5) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  } else {
    return (
      <p className="guess">
        {guess.map(({ letter, status }) => {
          return (
            <span className={`cell ${status}`} key={crypto.randomUUID()}>
              {letter}
            </span>
          );
        })}
      </p>
    );
  }
}

export default Guess;
