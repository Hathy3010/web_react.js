import "./App.css";
import React, { Component } from "react";
import Greet from "./components/Person";
import Welcome from "./components/Welcome";
import Car from "./components/Car";
import Fruit from "./components/Fruit";
import myList from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Car brand="Quynh" />
        <Fruit fruit="apple" />
        <myList />
      </div>
    );
  }
}

export default App;
