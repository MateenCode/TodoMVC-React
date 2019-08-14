import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchTodos, createTodos } from "action";
import { Todo, TodoForm } from "components";

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

  handleSubmit = todo => {
    this.props.createTodos(todo);
  };

  render() {
    const { todos } = this.props;
    return (
      <section className='container'>
        <TodoForm handleSubmit={this.handleSubmit} />
        {todos &&
          todos.length > 0 &&
          todos.map(item => (
            <div key={item.id}>
              <Todo id={item.id} title={item.title} />
            </div>
          ))}
      </section>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  { fetchTodos, createTodos }
)(index);
