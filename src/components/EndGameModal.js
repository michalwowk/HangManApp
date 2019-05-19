import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    backgroundColor: "rgba(59, 65, 99,.7)"
  }
};

const EndGameModal = props => (
  <Modal
    style={customStyles}
    isOpen={props.endGame}
    contentLabel="Selected Option"
    onRequestClose={props.handleGameRestart}
  >
    <h3>{props.finalResult === "win" ? "Victory!" : "Game over"}</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleGameRestart}>New word</button>
  </Modal>
);

export default EndGameModal;
