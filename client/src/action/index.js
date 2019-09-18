import { axios } from "../helpers";
import { FETCH_TODOS, CREATE_TODO, DELETE_TODO } from "../configs/types";

// Fetch All Todos
export const fetchTodos = () => async dispatch => {
  const response = await axios.get("/todos");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

// Post Todo
export const createTodo = formValues => async dispatch => {
  const response = await axios.post("/todos", { ...formValues });
  dispatch({ type: CREATE_TODO, payload: response.data });
};

// Delete Todo
export const deleteTodo = id => async dispatch => {
  await axios.delete(`/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
};
