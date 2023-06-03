import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import BasicButton from '../../components/Button/Button'
import { flexCenter, flexAlignCenter } from '../../styles/common'
import TodoAddModal from './components/Modal/add-modal'
import TodoList from './components/List/todo-list'
import 'react-toastify/dist/ReactToastify.css'
import usePrevModal from '../../hooks/use-prevmodal'
import { useTodoStore } from 'contexts/todo'
import { ToastContainer, toast } from 'react-toastify'

const TodoPage = () => {
	const params = useParams()
	console.log(params)

	/*
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  toast.promise(resolveAfter3Sec, {
    pending: "Promise is pending",
    success: "Promise resolved 👌",
    error: "Promise rejected 🤯",
  });
  */

	const [todoList, dispatch] = useTodoStore()
	// const [todoList, setTodoList] = useState([
	// 	{
	// 		id: 1,
	// 		title: 'example1',
	// 		content: 'content1',
	// 		state: false,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'example2',
	// 		content: 'content2',
	// 		state: false,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'example3',
	// 		content: 'content3',
	// 		state: false,
	// 	},
	// ])

	// const [isAddTodoMadal, setIsAddTodoModal] = useState(false);

	// 커스텀 훅으로 할 수 있을 거 같지 않나요??????
	// usePrevModal 만들어서 할 수 있다(공용 컴포넌트로 >)
	// const handleAddTodoMadal = () => {
	//   setIsAddTodoModal(true);
	//   // setIsAddTodoModal((prev) => !prev)
	// };

	// const handleCloseTodoMadal = () => {
	//   setIsAddTodoModal(false);
	// };

	const [isAddTodoMadal, setIsAddTodoModal, handleAdd] = usePrevModal(false)

	// 추가 함수
	const addTodo = (title, content) => {
		return new Promise(resolve =>
			setTimeout(() => {
				const newTodo = {
					id: Math.floor(Math.random() * 100000),
					state: false,
					title,
					content,
				}
				resolve(newTodo)
			}, 3000),
		).then(todo => {
			console.log(todo)
			dispatch({ type: 'ADD_TODO', payload: todo })
			// setTodoList([todo, ...todoList]) // 깊은 복사는 데이터를 가져옴, 그니까 [] 배열 자체를 가져오는 것이 아니고, {}, {}, {} 가져온다. 그걸로 [] 배열에 값을 넣어줌
			setIsAddTodoModal(false) // false 값으로 모달창 닫아줌
		})
	}

	// const addTodo = (title, content) => {
	// 	const newTodo = {
	// 		id: Math.floor(Math.random() * 100000),
	// 		state: false,
	// 		title,
	// 		content,
	// 	}
	// 	dispatch({ type: 'ADD_TODO', payload: newTodo })
	// 	setIsAddTodoModal(false)
	// }

	const showTodoToastMessage = e => {
		e.preventDefault()
		const title = e.target.title.value
		const content = e.target.content.value
		toast.promise(addTodo(title, content), {
			pending: 'TODO LOADING',
			success: 'TODO SUCCESS',
			error: 'TODO ERROR',
		})
	}

	// const showTodoToastMessage = e => {
	// 	e.preventDefault()
	// 	const title = e.target.title.value
	// 	const content = e.target.content.value
	// 	addTodo(title, content)
	// }

	// 변수를 객체로 선언(옵션의 재사용을 위해) -> autoClose={2000} 대신
	const toastOption = {
		autoClose: 2000,
		theme: 'colored',
	}

	return (
		<>
			{isAddTodoMadal && (
				<TodoAddModal onAddTodo={showTodoToastMessage} onClose={handleAdd} /> // 기존 개별 함수 사용 시 handleCloseTodoMadal
			)}
			<S.Wrapper>
				<S.Container>
					<S.Title>List</S.Title>
					<S.Content>
						{/* <TodoList todoList={todoList} setTodoList={setTodoList} /> */}
						<TodoList todo={todoList} dispatch={dispatch} />
					</S.Content>
					<S.ButtonBox>
						<BasicButton variant={'primary'} size={'full'} onClick={handleAdd}>
							{/* 기존 개별 함수 사용 시 handleAddTodoMadal */}
							추가
						</BasicButton>
					</S.ButtonBox>
				</S.Container>
			</S.Wrapper>
			<ToastContainer {...toastOption} />
			{/* <ToastContainer autoClose={2000} /> */}
		</>
	)
}

export default TodoPage

const Wrapper = styled.div`
	height: calc(100vh - 60px);
	padding-bottom: 60px;
	${flexCenter};
`

const Container = styled.div`
	width: 420px;
	height: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border-radius: 8px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	position: relative;
`

const Title = styled.h1`
	background-color: ${({ theme }) => theme.PALETTE.primary[300]};
	color: ${({ theme }) => theme.PALETTE.fontColor};
	padding-left: 32px;
	height: 32px;
	${flexAlignCenter};
`

const Content = styled.div`
	width: 100%;
	height: calc(100% - 32px);
	padding-bottom: 64px;
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`

const ButtonBox = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	${flexCenter}
`

const S = {
	Wrapper,
	Container,
	Title,
	ButtonBox,
	Content,
}
