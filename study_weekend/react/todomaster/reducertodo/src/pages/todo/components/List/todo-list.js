import { useTodoStore } from 'contexts/todo'
import OneTodo from './one-todo'

const TodoList = ({ todo, setTodoList }) => {
	const [todoList, dispatch] = useTodoStore()
	// const TODO_LIST = [
	//   {
	//     id: 1,
	//     title: "example1",
	//     content: "content1",
	//     state: false,
	//   },
	//   {
	//     id: 2,
	//     title: "example2",
	//     content: "content2",
	//     state: false,
	//   },
	//   {
	//     id: 3,
	//     title: "example3",
	//     content: "content3",
	//     state: false,
	//   },
	// ];

	// 체크 함수, setTodoList state를 prev 하여 true, false바꿔주기
	const handleCheckTodo = state => {
		console.log('check')
		// setTodoList((prev) => [...prev, prev.state]);
		// setTodoList((prev) => ({
		//   ...prev,
		//   state: true,
		// }));
	}

	// 수정 함수
	const handleUpdateTodo = (id, content) => {
		// const newTodoList = [...todoList]
		// const todo = newTodoList.find(todo => todo.id === id)
		// /*
		//   불변성을 지키기 위해, find는 새로운 배열을 반환하지 않기 때문에
		//   기존에 있는 todoList를 깊은 복사하여 다른 메모리 주소값을 갖게하고 수정한다.
		//  */
		// todo.content = content
		// setTodoList(newTodoList)

		dispatch({ type: 'UPDATE_TODO', payload: { id, content } })
	}

	// 삭제 함수
	const handleDeleteTodo = id => {
		if (window.confirm('정말 삭제하시겠습니까?')) {
			// const _todoList = todoList.filter(todo => todo.id !== id)
			// setTodoList(_todoList)
			dispatch({ type: 'DELETE_TODO', payload: id })
		}
	}

	return (
		<>
			{/* 리액트, 반복되는 html을 map으로 순회하는 것!이 중요, 하나하나 만들 필요가 없다 그런 비효율적인 짓 */}
			{todoList.map(todo => (
				<OneTodo
					todo={todo}
					handleCheckTodo={handleCheckTodo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
				/>
			))}
		</>
	)
}

export default TodoList
