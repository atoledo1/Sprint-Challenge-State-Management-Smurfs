import React, { Component } from "react";
import FormSmurf from "./smurfForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add smurfs to your village!</h1>
        <FormSmurf />
      </div>
    );
  }
}

export default App;
