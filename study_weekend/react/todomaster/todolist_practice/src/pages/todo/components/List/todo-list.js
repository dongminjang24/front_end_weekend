import React from 'react';
import OneTodo from './one-todo';
const TodoList = ({TodoList}) => {
    return (
        <div>
            {TodoList.map((v)=>{
                return <OneTodo todo={v}></OneTodo>
            })}
        </div>
    );
};

export default TodoList;