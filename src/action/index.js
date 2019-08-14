import { CreateActionCreator } from "helpers";
import { TODOS } from "configs/types";

export const fetchTodos = _ =>
  CreateActionCreator.read({
    path: "/todos",
    type: TODOS
  });

export const createTodos = _ =>
  CreateActionCreator.create({
    path: "/todos",
    type: TODOS
  });
