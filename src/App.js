import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Climb to diamond",
        completed: false
      },
      {
        id: 3,
        title: "Pump iron",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>App Test</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
