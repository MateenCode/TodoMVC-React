import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchTodos, createTodo, deleteTodo, toggle } from "action";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

/*
  1. display todos✔️
  2. add todo✔️
  3. cross off todo 
  4. show number of active todos 
  5. filter all/active/complete 
  6. delete todo✔️
  7. delete all complete  
    7.1 only show if atleast one is complete
*/

class index extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }

  // add todo
  handleSubmit = todo => {
    this.props.createTodo(todo);
  };

  // delete todo
  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  // toggle complete
  toggle = id => {
    this.props.toggle(id);
  };

  render() {
    const { todos } = this.props.todos;
    return (
      <section className='container'>
        <TodoForm handleSubmit={this.handleSubmit} />
        {todos &&
          todos.length > 0 &&
          todos.map(todo => (
            <Todo
              key={todo.id}
              title={todo.title}
              complete={todo.complete}
              toggle={this.toggle.bind(this, todo.id)}
              handleDelete={this.handleDelete.bind(this, todo.id)}
            />
          ))}
      </section>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  { fetchTodos, createTodo, deleteTodo, toggle }
)(index);
