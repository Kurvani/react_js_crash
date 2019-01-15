import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todoprop => (
      <Todoitem key={todoprop.id} todoprop={todoprop} />
    ));
  }
}

// PropTypes
// the format is (name of the class).propTypes = { propName: PropTypes.(Object/Array).whatever
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
