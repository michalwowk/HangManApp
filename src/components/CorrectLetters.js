import React from "react";
import CorrectLetter from "./CorrectLetter";

const CorrectLetters = ({ randomWord, guessedLetters }) => (
  <div className="correctLetters">
    {randomWord.split("").map(letter => (
      <CorrectLetter
        key={Math.random() * 10000}
        letter={letter}
        guessedLetters={guessedLetters}
      />
    ))}
  </div>
);

export default CorrectLetters;
