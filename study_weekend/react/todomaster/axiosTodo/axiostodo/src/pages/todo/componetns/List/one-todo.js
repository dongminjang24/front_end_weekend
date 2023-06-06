import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useInput from "../../../../hooks/use-input";
import useInputs from "../../../../hooks/use-inputs";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, checkTodo } from "reducer/todo";

const OneTodo = ({ todo, getTodoList }) => {
  const dispatch = useDispatch();

  const { id, state, title, content } = todo; //투두에 데이터가 너무 많거나 하면 그렇게 하면됨

  const [editContent, onChangeEditContent, setValue] = useInput(content);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setValue(content);
  }, [content]);

  const addTodoHandler = (e, id, title, content, state) => {
    e.preventDefault();
    if (!isEditMode) return setIsEditMode(true);
    dispatch(updateTodo({ id, title, content, state }));
    setIsEditMode(false);
  };

  const handleDeleteTodo = (e, id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      e.preventDefault();
      dispatch(deleteTodo(id));
    }
  };

  const handleTodoEdit = (id, title, content, state) => {
    dispatch(checkTodo({ id, title, content, state: !state }));
  };
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <S.Wrapper
      onSubmit={(e) => addTodoHandler(e, id, title, editContent, state)}
      state={state}
    >
      <S.Header>
        <S.StateBox
          state={state}
          onClick={() => {
            handleTodoEdit(id, title, content, state);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox>
        <S.Title state={state}>
          {title}
          <div>
            <button>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={(e) => {
                handleDeleteTodo(e, id);
              }}
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
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
        {/*(OneContent=== ''? content : OneContent)*/}
      </S.Content>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#3CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
