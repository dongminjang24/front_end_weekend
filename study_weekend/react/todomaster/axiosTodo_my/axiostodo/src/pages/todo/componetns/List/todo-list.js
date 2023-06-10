import OneTodo from "./one-todo";
import { useDispatch } from "react-redux";
import { getTodo, deleteTodo } from "reducer/todo";
import { useEffect, useState } from "react"; //
import { useSelector } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todos);
  const getTodoList = () => {
    dispatch(getTodo());
  };

  useEffect(() => {
    getTodoList();
    // setList(todoList);
  }, []);

  return (
    <>
      {todoList.map((todo, i) => (
        <OneTodo
          key={i}
          todo={todo}
          getTodoList={getTodoList}
          // handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
