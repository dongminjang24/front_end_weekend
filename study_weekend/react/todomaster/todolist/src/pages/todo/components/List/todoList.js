import OneTodo from "./oneTodo"
const TodoList =() =>{

    const TODO_LIST =[
        {
            id:1,
            title:"example1",
            content:"content1",
            state:false  
        },
        {
            id:2,
            title:"example2",
            content:"content2",
            state:false  
        },
        {
        id:3,
        title:"example3",
        content:"content3",
        state:false  
        }
    ]
    return (
        <>{TODO_LIST.map((todo)=>
            (<OneTodo key={todo.id} todo={todo}>
            </OneTodo>))}
                
        </>
    )
}

export default TodoList