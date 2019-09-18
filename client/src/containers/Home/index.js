import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "action";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

/*
  1. display todos  ✔️
  2. add todo
  3. cross off todo 
  4. show number of active todos 
  5. filter all/active/complete 
  6. delete todo
  7. delete all complete  
    7.1 only show if atleast one is complete
*/

class index extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }

  // handleSubmit = todo => {
  //   this.props.createTodos(todo);
  // };

  render() {
    const { todos } = this.props.todos;

    return (
      <section className='container'>
        <TodoForm handleSubmit={this.handleSubmit} />

        {todos &&
          todos.map(todo => (
            <div key={todo.id}>
              <Todo title={todo.title} complete={todo.complete} />
            </div>
          ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(index);
