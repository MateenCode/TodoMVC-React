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

    this.props.handleSubmit({
      title: this.state.title,
      complete: false
    });

    this.setState({
      title: ""
    });
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
