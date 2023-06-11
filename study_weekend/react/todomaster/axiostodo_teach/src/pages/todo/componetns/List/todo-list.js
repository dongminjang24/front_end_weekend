import TodoApi from "apis/todo.api";
import OneTodo from "./one-todo";
import useTodo from "hooks/use-todo";
const TodoList = () => {
  const { TodoList } = useTodo();

  return (
    <>
      {TodoList.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
