import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useInput from "../../../../hooks/use-input";
import useInputs from "../../../../hooks/use-inputs";
const OneTodo = ({ todo,handleUpdateTodo, handleDeleteTodo }) => {
    /*
    * @Params: {}
    *  @TODO :
    * form 으로 바꾸는 거로 수정
    * 
    * */

    // const [{ OneTitle, OneContent }, onChangeForm,setValues] = useInputs({
    //     OneTitle: "",
    //     OneContent: "",
       
    // });
    const { id,state, title, content } = todo;  //투두에 데이터가 너무 많거나 하면 그렇게 하면됨

    const [editContent,onChangeEditContent,setValue] = useInput(content);


    // const [editTitle,onChangeEditTitle] = useInput();

    // const [isE] = useState();
    const [isEditMode,setIsEditMode] = useState(false);

    useEffect(() => {
        setValue(content);
    }, [content]);

    const handleSetIsEditMode = ()=>{
       if(!isEditMode) return setIsEditMode(true)
       handleUpdateTodo(id,editContent)
       setIsEditMode(false)
    }
// 생각을 해보자.
// 삭제를 하고나서 다음껄 에딧하면 그전의 editContent가 나와 그렇다는 건 editContent가 갱신이 안된것

    return (
        <S.Wrapper state={state}>
            <S.Header>
                <S.StateBox state={state}>
                    <FontAwesomeIcon icon={faCheck} />
                </S.StateBox>
                <S.Title  state={state}>
                    {title}
                {/* {isEditMode ? <textarea name='OneTitle' value={OneTitle}
                onChange={onChangeForm}
                ></textarea>: (OneTitle=== ''? title : OneTitle)} */}
                    <div>
                        <FontAwesomeIcon icon={faPen} onClick={handleSetIsEditMode}/>
                        <FontAwesomeIcon icon={faBan}  onClick={()=>{handleDeleteTodo(id)
                    }
                        
                        }/>
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

const Wrapper = styled.li`
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
