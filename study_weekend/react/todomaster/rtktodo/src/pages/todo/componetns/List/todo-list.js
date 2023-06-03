import { useSelector } from "react-redux";
import OneTodo from "./one-todo";
import { getTodo } from "reducer/todo";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const TodoList = () => {
  // todo의 state를 객체로 보냈으므로, todo.todos를 해야 배열이 들어옵ㄴㅋ
  const dispatch = useDispatch();

  // let List;

  // console.log(List);
  const todoList = useSelector((state) => state.todo.todos);
  const List = () => {
    dispatch(getTodo());
  };
  useEffect(() => {
    List();
  });
  console.log(todoList);
  const { loading } = useSelector((state) => state.todo.addTodoState);
  // console.log(loading);
  if (loading) return <div> loading</div>;
  // 렌더링 전과 후의 것은 개수가 같아야됨. 그래서 if loading하는 부분이 맨밑으로 나와야됨.
  return (
    <>
      {/* loading? ():() */}

      {todoList.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
