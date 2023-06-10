import { createContext, useContext, useReducer, useState } from "react";
import TodoApi from "apis/todo.api";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    try {
      const res = await TodoApi.getTodo();
      // console.log(res)
      console.log(res);
      setTodoList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (title, content) => {
    try {
      if (!title || !content) {
        const err = new Error();
        err.type = "empty error";
        err.message = "빈칸을 채워주세요";
        throw err;
      }
      await TodoApi.addTodo(content, title);
      getTodoList();

      setIsAddTodoModal(false);
    } catch (err) {
      throw err;
    }
  };
  const updatTodo = async (id, content, state) => {
    try {
      const response = await TodoApi.updateTodo(id, content, state);
      console.log(response.data.data);
      const getTodo = await TodoApi.getTodo;
      setTodoList(getTodo.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteTodo = async (id) => {
    const response = await TodoApi.deleteTodo(id);
    const getTodo = await TodoApi.getTodo();
    setTodoList(getTodo.data.data);
  };

  const handAddTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handleCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };
  const handleTodoDelete = (id) => {
    deleteTodo(id);
  };
  const handleTodoEdit = (isEditMode, id, editContent, setIsEditMode) => {
    if (!isEditMode) return setIsEditMode(true);
    updatTodo(id, editContent);
    setIsEditMode(false);
  };
  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        isAddTodoModal,
        setIsAddTodoModal,
        getTodoList,
        addTodo,
        handAddTodoModal,
        handleCloseTodoModal,
        updatTodo,
        deleteTodo,
        handleTodoDelete,
        handleTodoEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoStore = () => useContext(TodoContext);

export default TodoProvider;
