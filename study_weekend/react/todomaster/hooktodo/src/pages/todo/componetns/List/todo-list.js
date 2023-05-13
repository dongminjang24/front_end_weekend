import OneTodo from "./one-todo";
import { useState } from "react";
const TodoList = ({todoList}) => {
    
    // const TODO_LIST = 

    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo} />
            ))}
        </>
    );
};
export default TodoList;
