import TodoApi from "apis/todo.api";
const { createContext, useState, useEffect, useContext } = require("react");
const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [TodoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    const res = await TodoApi.getTodo();
    setTodoList(res.data.data);
  };

  const addTodo = async (title, content) => {
    try {
      if (!title || !content) {
        const err = new Error();
        err.type = "empty error";
        err.message = "빈칸을 채워주세요";
      }
      await TodoApi.addTodo(title, content);
      getTodoList();
    } catch {}
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const updatTodo = async (id, content, state) => {
    try {
      await TodoApi.updatTodo(id, { content, state });
      getTodoList();
    } catch (err) {
      console.error(err);
    }
    /* 
        1. 낙관적 업데이트
        2. api를 다시 호출해서 업데이트 index => getTodoList()
    */
  };

  const deleteTodo = async (id) => {
    const response = await TodoApi.deleteTodo(id);
    getTodoList();
  };
  return (
    <TodoContext.Provider value={{ TodoList, addTodo, updatTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
