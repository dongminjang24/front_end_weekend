import React, { useEffect } from "react";
import { useState } from "react";
const useTodo = () => {
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    setTodoList(...todoList);
  }, []);
  // 전역상태로 해서 같더라도 렌더링은 안되지만, 호출을 했을 수도 있음.
  //한번만 호출하기 위해서 우린 성크를 사용해서 전역상태관리를 하였다.
  const AddTodo = () => {};
  const onUpdateTodo = () => {};

  return AddTodo, onUpdateTodo;
};

export default useTodo;
