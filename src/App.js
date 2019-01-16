import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/Pages/About";
//import uuid from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        //we grab our todos array, use the spread operator to copy the whole thing and return all the todoprops that DONT have the id we're searching for
        todos: [...this.state.todos.filter(todoprop => todoprop.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
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
