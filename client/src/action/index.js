import { axios } from "../helpers";
import { FETCH_TODOS } from "../configs/types";

// Fetch All Todos
export const fetchTodos = () => async dispatch => {
  const response = await axios.get("/todos");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};
