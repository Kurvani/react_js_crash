import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f9a7bb",
      padding: "10px",
      borderBottom: "1px #ffffff dotted",
      textDecoration: this.props.todoprop.completed ? "line-through" : "none"
    };
  };

  //The e should be (e) but prettier removes the paretheses

  render() {
    const { id, title } = this.props.todoprop;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {/* spacing for format */}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            {" "}
            x{" "}
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
Todoitem.propTypes = {
  todoprop: PropTypes.object.isRequired
};

//CSS styling for the delete button
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default Todoitem;
