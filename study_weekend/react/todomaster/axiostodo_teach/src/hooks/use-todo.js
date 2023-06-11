import { useEffect, useState } from "react"


const useTodo = () => {
    const [todoList, setTodoList] = useState();
    

    useEffect(()=>{
        // await axios.get
        setTodoList(...todoList)
    }, [])
    

    const onAddTodo = () => {
        //await axios.post
    }

    const onUpdateTodo = () => {}

    return (
        todoList,
        onAddTodo,
        onUpdateTodo
    )
}
export default useTodo