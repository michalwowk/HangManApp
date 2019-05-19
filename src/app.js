import React from "react";
import ReactDOM from "react-dom";
import HangmanApp from "./components/HangmanApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const appRoot = document.getElementById("app");
ReactDOM.render(<HangmanApp />, appRoot);
