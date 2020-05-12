// This form will have a user input, so requires local state
// As state required, this should be a class-based component
// Class-based components automatically get passed props i.e. addTodo in this case

import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange} />
          <input className="btn pink" type="submit" value="Add todo" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
