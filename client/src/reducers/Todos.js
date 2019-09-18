import {
  FETCH_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  PATCH_TODO
} from "../configs/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case PATCH_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              complete: !todo.complete
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
}
