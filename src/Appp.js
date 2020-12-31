import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

class Appp extends Component {
  constructor() {
    super();

    this.state = {
      string: "she said: let's go to ur place.",
    };
  }

  render() {
    return (
      <div className="Appp">
        <Greet name="Deon" heroName="Swift">
          <p>This is the greatest hero to ever exist, young living legend</p>
        </Greet>
        <Greet name="Clark" heroName="SuperMan" />
        <Welcome />
        <Hello />
      </div>
    );
  }
}

export default Appp;
