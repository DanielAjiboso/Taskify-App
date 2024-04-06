import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo.tsx";
import "./styles.css";
interface Props {
  // todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = function ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodo
          index={index}
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
