import { CreateActionCreator } from "helpers";
import { TODOS } from "configs/types";

export const fetchTodos = _ =>
  CreateActionCreator.read({
    path: "/todos",
    type: TODOS
  });

export const createTodos = todo =>
  CreateActionCreator.create({
    path: "/todos",
    type: TODOS,
    todo
  });
