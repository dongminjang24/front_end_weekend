import { useParams } from "react-router-dom"
import styled from "styled-components";
import { flexCenter,flexAlignCenter } from "../../styles/common"
import { PALLET } from "../../styles/theme";
import theme from "../../styles/theme";
import BasicButton from "../main/components/Button/Button";
import TodoAddModal from "./components/Modal/addModal";
import TodoList from "./components/List/todoList";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
  // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

  const params = useParams();
  console.log(params);

  const addTodo = () => new Promise(resolve=> {
      console.log(resolve)
    return setTimeout(resolve,3000)})
  

  const showTodoToastMessage = (e) => {
    
  toast("Wow so easy !")
  e.preventDefault()
  toast.promise(addTodo,{
    pending: "TOTO LOADING",
    success: "TODO SUCCESS",
    error: 'Promise rejected 🤯'
  })
}



  const toastOption ={
  position:"top-left",
  autoClose:1000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false ,
  pauseOnFocusLoss:true,
  draggable: true,
  pauseOnHover:true,
  theme:"light"
  
}

/* toast.promise(
  resolveAfter3Sec,
  {
    pending: 'Promise is pending',
    success: 'Promise resolved 👌',
    error: 'Promise rejected 🤯'
  }
) */
  return (
    <>
      <TodoAddModal onAddToDo={showTodoToastMessage} ></TodoAddModal>
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList />
          </S.Content>
          <S.ButtonBox>
            <BasicButton variant={"primary"} size={"full"}>
              추가
            </BasicButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
      <ToastContainer
      {...toastOption}
      />
    </>
  );
}

export default Todo
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