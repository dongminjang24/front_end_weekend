import { useState } from "react";
import OneTodo from "./one-todo";
import TodoApi from "apis/todo.api";
import { useTodoStore } from "contexts/todo";
const TodoList = () => {
  const { todoList } = useTodoStore();

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
