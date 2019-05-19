import React from "react";

const CorrectLetter = ({ guessedLetters, letter }) => (
  <div className="correctLetters__box">
    <span className="correctLetters__letter">
      {guessedLetters.includes(letter) && letter}
    </span>
  </div>
);

export default CorrectLetter;
