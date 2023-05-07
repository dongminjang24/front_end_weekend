import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../style";
import { useEffect, useState } from "react";
import {FONT_SIZE,PALETTE} from '../../../../styles/theme'
import styled from "styled-components";

const SignUpForm = () => {
    const [{ email, password, passowrdConfirm }, onChangeForm,setValues] = useInputs({
        email: "",
        password: "",
        passowrdConfirm: "",
    });
    const [passwordWarning,setPasswordWarning] = useState(null)
    const [emailWarning,setEmailWarning] = useState(null)
    const passwordWarn = () =>{
        if (((password.length)< 8)&&(password.length>=1)) {
            setPasswordWarning(true)
        }
            else{
                setPasswordWarning(false)
            }
        }
    const passwordWarnWord = passwordWarning === true ? "비밀번호는 8자리 이상이어야 합니다.":null
    const emailCheck = () =>{
        if (email.includes("@")&&(email.length>=1)) {
            setEmailWarning(false)
        }
        else if(email.length>=1) {
         setEmailWarning(true)
        }
        }
        const emailWarnWord = emailWarning === true ? "이메일 형식을 지켜주세요.":null 
        
        const [passwordCheck,setPasswordCheckWord] =useState(null)
        const passWordConfirm =()=>{
            if( password != passowrdConfirm){
                setPasswordCheckWord(false) 
              }else{
                setPasswordCheckWord(true)
              }
        }
        const ConfirmWarnWord = passwordCheck === true ? null:"비밀번호를 일치시켜 주세요."
        const [disable,setDisable] =useState(true)

        const disabledButton =()=>{
            if ((emailWarning===false) && (passwordWarning===false) && (passwordCheck===false)) {
                setDisable(false)
            }else{
                setDisable(true)
            }
        }
        useEffect(()=>{
            emailCheck()
            passwordWarn()
            passWordConfirm()
            disabledButton()
    },      
        [email,password,passowrdConfirm])
    
    /* 
        (기초)
        email은 email 양식을 지켜야하며 (@ 포함)
        password는 8글자 이상 작성 되어야한다.

        password - passwordConfirm이 달라졌을 때 실시간으로
        비밀번호와 비밀번호 확인이 다르지 않은지 확인하라는 에러 메세지
        
        BascicButton은
        데이터가 모두 채워져있지 않으면 dsiabled
        유효성이 검사되지 않으면 disabled --> 아이디와 비밀번호 양식을 확인해주세요 에러 메세지
        비밀번호와 비밀번호 확인이 다르면 disabled --> CSS 속성도 변경 (회색)

        login의 email 로직에도 똑같이 useInputs를 적용하고 유호성 적용 후
        커스텀 훅으로 함수 재사용 할 것 

        (1) state 최적화
        (2) custom hook 작성법 (모듈화)
        
        +

        (심화)
        react-hook-from 이용하여 랜더링 최적화
        단, 장단점을 정리하고 원하는 대로 효과를 거뒀는지 작성할 것
        구현을 목표로 하지 말고 실무에서 자주 사용하는 라이브러리 이므로 확실하게 이해하는 것이 중요
    */

    return (
        <S.Form>
            <S.InputBox>
                <label>이메일</label>
                <input onChange={onChangeForm}   name="email" />
            </S.InputBox>
            <Warning>{emailWarnWord}</Warning>
            <S.InputBox>
                <label>비밀번호</label>
                <input  onChange={onChangeForm}  name="password" />
            </S.InputBox>
            <Warning>{passwordWarnWord}</Warning>
            <S.InputBox>
                <label>비밀번호 확인</label>
                <input onChange={onChangeForm}  name="passowrdConfirm" />
            </S.InputBox>
            {ConfirmWarnWord}
            <BasicButton size={"full"} shape={"default"} variant={"primary"} disabled={disable}>
                회원가입
            </BasicButton>
        </S.Form>
    );
};
export default SignUpForm;


const Warning = styled.div`
    font-size:${({theme}) => theme.FONT_SIZE.small};
    color:${({theme}) => theme.PALETTE.error}
`
