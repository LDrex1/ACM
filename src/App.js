// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Clock from "./components/Clock";

const process = [
  "images/c-130-hercules_001.jpg",
  "images/c-130-hercules_002.jpg",
];
class Process extends React.Component {
  render() {
    const { process } = this.props;

    return (
      <section className="slides">
        {process.map((pic) => (
          <div>
            <img src={pic} alt="a C-130" />
          </div>
        ))}
      </section>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header brand="ACMD" />
        <Process process={process} />
        <Article />
        <Clock />
      </>
    );
  }
}

export default App;
