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
  markComplete = e => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />
          {this.props.todoprop.title}
        </p>
      </div>
    );
  }
}

// PropTypes
Todoitem.propTypes = {
  todoprop: PropTypes.object.isRequired
};

export default Todoitem;
