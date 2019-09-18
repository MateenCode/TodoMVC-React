import { FETCH_TODOS, CREATE_TODO } from "../configs/types";

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
        todos: action.payload
      };
    default:
      return state;
  }
}
