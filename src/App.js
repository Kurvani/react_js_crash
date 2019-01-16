import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/Pages/About";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Climb to diamond",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Pump iron",
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todoprop => {
        if (todoprop.id === id) {
          todoprop.completed = !todoprop.completed;
        }
        return todoprop;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    this.setState({
      //we grab our todos array, use the spread operator to copy the whole thing and return all the todoprops that DONT have the id we're searching for
      todos: [...this.state.todos.filter(todoprop => todoprop.id !== id)]
    });
  };

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
