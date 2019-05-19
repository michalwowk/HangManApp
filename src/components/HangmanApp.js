import React from "react";
import HangmanInfographic from "./HangmanInfographics";
import CorrectLetters from "./CorrectLetters";
import WrongLetters from "./WrongLetters";
import EndGameModal from "./EndGameModal";
import { API_KEY } from "../../config.js"

export default class HangmanApp extends React.Component {
  state = {
    randomWord: "",
    wrongLetters: [],
    guessedLetters: ["-"],
    remainingShots: 11,
    finalResult: "",
    repeatedKey: false,
    endGame: false
  };

  componentDidMount() {
    this.getDataFromApi();
    this.handleKeyPress();
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyUpFunction);
  }

  handleGameRestart = () => {
    this.setState(() => ({
      randomWord: "",
      wrongLetters: [],
      guessedLetters: ["-"],
      remainingShots: 11,
      finalResult: "",
      endGame: false
    }));
    this.getDataFromApi();
  };

  getDataFromApi = () => {
    const myRequest = new Request(
      "https://wordsapiv1.p.mashape.com/words/?random=true",
      {
        method: "GET",
        headers: new Headers({
          "X-Mashape-Key": `${API_KEY}`
        })
      }
    );

    fetch(myRequest)
      .then(resp => resp.json())
      .then(response => {
        this.setState(() => ({
          randomWord: response.word.replace(" ", "-")
        }));
      })
      .catch(error => console.log("Błąd: ", error));
  };

  keyUpFunction = e => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey.match(/^[a-zA-Z]{1}$/)) {
      this.handleLetterCheck(pressedKey);
      this.handleGameEnd();
    }
  };

  handleKeyPress = () => {
    window.addEventListener("keyup", this.keyUpFunction);
  };

  handleGameEnd = () => {
    this.checkWin();
    this.checkLose();
  };

  checkWin = () => {
    const { randomWord, guessedLetters } = this.state;
    let matches = 0;
    randomWord.split("").forEach(letter => {
      if (guessedLetters.includes(letter)) {
        matches++;
        if (matches === randomWord.length) {
          this.setState(() => ({
            endGame: true,
            finalResult: "win"
          }));
        }
      }
    });
  };

  checkLose = () => {
    const { randomWord, guessedLetters, remainingShots } = this.state;
    if (randomWord.length > guessedLetters.length && remainingShots <= 0) {
      this.setState(() => ({
        endGame: true,
        finalResult: "lose"
      }));
    }
  };

  handleLetterCheck = pressedKey => {
    const { randomWord, guessedLetters, wrongLetters } = this.state;
    if (
      guessedLetters.includes(pressedKey) ||
      wrongLetters.includes(pressedKey)
    ) {
      this.setState(() => ({
        repeatedKey: true
      }));
      return null;
    } else if (randomWord.split("").includes(pressedKey)) {
      this.setState(prevState => ({
        guessedLetters: [...prevState.guessedLetters, ...pressedKey],
        repeatedKey: false
      }));
    } else {
      this.setState(prevState => ({
        wrongLetters: [...prevState.wrongLetters, ...pressedKey],
        remainingShots: prevState.remainingShots - 1,
        repeatedKey: false
      }));
    }
  };

  render() {
    const {
      wrongLetters,
      repeatedKey,
      guessedLetters,
      randomWord,
      endGame,
      finalResult
    } = this.state;
    return (
      <div className="wrapper">
        <HangmanInfographic missedLetters={wrongLetters.length} />{" "}
        <WrongLetters wrongLetters={wrongLetters} repeatedKey={repeatedKey} />{" "}
        <CorrectLetters
          guessedLetters={guessedLetters}
          randomWord={randomWord}
        />{" "}
        <EndGameModal
          endGame={endGame}
          finalResult={finalResult}
          handleGameRestart={this.handleGameRestart}
        />{" "}
      </div>
    );
  }
}
