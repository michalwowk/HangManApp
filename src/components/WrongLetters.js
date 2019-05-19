import React from "react";

const WrongLetters = ({ wrongLetters, repeatedKey }) => {
  return (
    <div className="wrongLetters">
      <h2 className="wrongLetters__title">You Missed: </h2>
      <div className="wrongLetters__list">
        {wrongLetters.map(letter => (
          <span key={Math.random() * 10000} className="wrongLetters__item">
            {letter}
          </span>
        ))}
      </div>
      {repeatedKey && (
        <p className="repeatedKeyAlert">
          You have already used this key, please type another letter.
        </p>
      )}
    </div>
  );
};

export default WrongLetters;
