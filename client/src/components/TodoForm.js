import React, { PureComponent } from "react";

export default class TodoForm extends PureComponent {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let todo = {
      title: this.state.title,
      completed: false
    };

    this.props.handleSubmit(todo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>add</button>
      </form>
    );
  }
}
