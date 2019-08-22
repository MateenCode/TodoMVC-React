import { CreateActionCreator } from "helpers";
import { TODOS } from "configs/types";

export const fetchTodos = _ =>
  CreateActionCreator.read({
    path: "/api/todo",
    type: TODOS
  });

export const createTodos = todo =>
  CreateActionCreator.create({
    path: "/api/todo",
    type: TODOS,
    body: todo.title
  });
