import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router';
import TodoList from './components/List/todo-list';
const TodoPage = () => {
    const params = useParams()
    console.log(params);
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "example1",
            content: "content1",
            state: false,
        },
        {
            id: 2,
            title: "example2",
            content: "content2",
            state: false,
        },
        {
            id: 3,
            title: "example3",
            content: "content3",
            state: false,
        },
    ])

    return (
        
        <div>
            <TodoList todoList={todoList}></TodoList>
        </div>
    );
};


export default TodoPage;


const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALLET.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALLET.primary[300]};
  color: ${({ theme }) => theme.PALLET.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const S = {
    Wrapper,
    Container,
    Title,
    ButtonBox,
    Content,
  };