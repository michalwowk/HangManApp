import React from "react";

const HangmanInfographics = ({ missedLetters }) => {
  return (
    <div className="hangmanInfographics">
      <div
        data-visible="true"
        className="hangmanInfographics__item hangmanInfographics__top-bar"
      />
      <div
        data-visible="true"
        className="hangmanInfographics__item hangmanInfographics__bottom-bar"
      />
      <div className="hangmanInfographics__body">
        <div
          data-visible={missedLetters >= 1 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__head"
        >
          <img
            src="../assets/imgs/head.png"
            alt=""
            srcSet="../assets/imgs/head.png 1x, ../assets/imgs/head@2x.png 2x"
          />
        </div>
        <div
          data-visible={missedLetters >= 2 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__neck"
        />
        <div
          data-visible={missedLetters >= 3 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__chest hangmanInfographics__chest--left"
        />
        <div
          data-visible={missedLetters >= 3 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__chest hangmanInfographics__chest--right"
        />
        <div
          data-visible={missedLetters >= 3 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__waist"
        />
        <div
          data-visible={missedLetters >= 4 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__arm hangmanInfographics__arm--left"
        />
        <div
          data-visible={missedLetters >= 5 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__arm hangmanInfographics__arm--right"
        />
        <div
          data-visible={missedLetters >= 6 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__hand hangmanInfographics__hand--left"
        />
        <div
          data-visible={missedLetters >= 7 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__hand hangmanInfographics__hand--right"
        />
        <div
          data-visible={missedLetters >= 8 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__leg hangmanInfographics__leg--left"
        />
        <div
          data-visible={missedLetters >= 9 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__leg hangmanInfographics__leg--right"
        />
        <div
          data-visible={missedLetters >= 10 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__foot hangmanInfographics__foot--left"
        />
        <div
          data-visible={missedLetters >= 11 ? "true" : "false"}
          className="hangmanInfographics__item hangmanInfographics__foot hangmanInfographics__foot--right"
        />
      </div>
    </div>
  );
};

export default HangmanInfographics;
