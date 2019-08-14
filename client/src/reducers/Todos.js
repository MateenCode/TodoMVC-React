import { CreateReducer } from "helpers";
import { TODOS } from "configs/types";

export const Todos = CreateReducer(TODOS, "id");
