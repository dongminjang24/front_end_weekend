/*
1. contexts 폴더 생성
2. todo.js 파일 생성
3. 
4. 
5. 
6. 
*/

import { createContext, useContext, useReducer } from 'react'

/* 
context => 전역 상태 관리 도구, 다른 라이브러리의 의존도가 생기지 않음(리액트에 내장되어있기 때문)
전역 상태 관리해야하는 이유?

1. props drilling, 현재 해당 컴포넌트에는 필요하지 않음에도 자식 컴포넌트에게 props를 전달하기 위하여
2. 부모가 알지 못하는 상태를 알고 있는가?
*/

// 순서
// 1. 냉장고 만들기
const TodoContext = createContext()

// 2. 기본값 만들기
const initialState = [
	{
		id: 1,
		title: 'example1',
		content: 'content1',
		state: false,
	},
	{
		id: 2,
		title: 'example2',
		content: 'content2',
		state: false,
	},
	{
		id: 3,
		title: 'example3',
		content: 'content3',
		state: false,
	},
]
// 3. Provider => 왜? 사용하는 영역을 감싸주기 위해서
// 4. 전역으로 사용할 state 생성 --> useRreducer, useState
// 5. reducer 생성 const [todoList, dispatch] = useReducer(reducer함수, 기본값)

// 6. reducer 함수 생성
const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			return [...state, action.payload]
		}
		case 'UPDATE_TODO': {
			const { id, content } = action.payload
			const updateTodo = state.find(todo => todo.id === id)
			// if (updateTodo) {
			// 	updateTodo.content = content
			// }
			updateTodo.content = content
			return [...state]
		}
		case 'DELETE_TODO': {
			return state.filter(todo => todo.id !== action.payload)
		}
		default: {
			return state
		}
	}
} // 과제 - 여기 작성하면 됨!

// 7. provider 내가 전역으로 사용하고자 하는 값을 value로 전달
// 8. 주의사항, 보내야할 데이터가 여러개라면 구조 분해할당해서 참조할  수 있도록 객체로 전달
const TodoProvider = ({ children }) => {
	const [todoList, dispatch] = useReducer(todoReducer, initialState)
	// state는 그냥 상태를 생성할 뿐
	// 그러나 reducer는 reducer 함수를 통해 업데이트 로직을 외부 파일로 분리하여 로직을 재사용
	return (
		<TodoContext.Provider value={[todoList, dispatch]}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
// 9. App.js 에 감싸주기
// 10. 어디서든 쉽게 참조할 수 있도록 useContext를 해당 파일에 만들어서 export - 과제
export const useTodoStore = () => useContext(TodoContext)
