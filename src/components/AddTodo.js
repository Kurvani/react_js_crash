import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  //We set the state to change the title to whatever value we enter in the text field

  onSubmit = e => {
    e.preventDefault();
    //we do the this.props method because we want to pass the onSubmit function up
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
