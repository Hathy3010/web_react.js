import "./App.css";
import React, { Component } from "react";
import Greet from "./components/Person";
import Welcome from "./components/Welcome";
import Car from "./components/Car";
import Fruit from "./components/Fruit";
import Components from "./components/new_components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Car brand="Quynh" />
        <Fruit fruit="apple" />
        <myList />
        <Components />
      </div>
    );
  }
}

export default App;
