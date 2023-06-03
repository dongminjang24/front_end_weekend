import styled from 'styled-components'
import { flexAlignCenter, flexCenter } from '../../../../styles/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useInput from '../../../../hooks/use-input'

/**
 *
 * @param {*} param0
 * @returns
 *
 */

/*
  과제
  form 이벤트로 바꾸기(Wrapper를 form으로 수정을)
  useInput 바꿔야함
*/

const OneTodo = ({
	todo,
	handleCheckTodo,
	handleUpdateTodo,
	handleDeleteTodo,
}) => {
	const { id, state, title, content } = todo
	const [isEditMode, setIsEditMode] = useState(false) // 수정
	const [editContent, onChangeEditContent] = useInput(content)

	// useInputs로 써보기
	// const [{title, content}, onChangeInput] = useInputs()

	const handleOnSetEditMode = () => {
		// console.log(isEditMode);
		if (!isEditMode) return setIsEditMode(true)
		handleUpdateTodo(id, editContent)
		setIsEditMode(false)
		// prev로도 할 수 있음 ~
	}

	return (
		<S.Wrapper state={state}>
			<S.Header>
				<S.StateBox state={state}>
					<FontAwesomeIcon
						icon={faCheck}
						onClick={() => handleCheckTodo(state)}
					/>
				</S.StateBox>
				<S.Title state={state}>
					{title}
					<div>
						<FontAwesomeIcon icon={faPen} onClick={handleOnSetEditMode} />
						<FontAwesomeIcon
							icon={faBan}
							onClick={() => handleDeleteTodo(id)}
						/>
					</div>
				</S.Title>
			</S.Header>
			<S.Content state={state}>
				{isEditMode ? (
					<textarea
						value={editContent}
						onChange={onChangeEditContent}
					></textarea>
				) : (
					content
				)}
			</S.Content>
		</S.Wrapper>
	)
}
export default OneTodo

const Wrapper = styled.li`
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border: 1px solid #999;
	margin: 16px 0;
	list-style: none;
	border-radius: 8px;
	background-color: ${({ state, theme }) =>
		state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`

const Header = styled.div`
	border-bottom: 1px dotted #999;
	${flexAlignCenter};
	padding: 8px 16px;
	height: 48px;
`

const Title = styled.h1`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
	& svg {
		cursor: pointer;
		margin-left: 16px;
		:hover {
			transform: scale(1.2);
		}
	}
`

const StateBox = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 8px;
	${flexCenter};
	color: ${({ state }) => (state ? '#3CB371' : '#999')};
	cursor: pointer;
	:hover {
		transform: scale(1.2);
	}
`

const Content = styled.div`
	padding: 16px;
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
	& textarea {
		width: 100%;
		height: 100%;
		border: 1px dotted #999;
		outline: none;
		resize: none;
	}
`

const S = {
	Wrapper,
	Header,
	StateBox,
	Title,
	Content,
}
