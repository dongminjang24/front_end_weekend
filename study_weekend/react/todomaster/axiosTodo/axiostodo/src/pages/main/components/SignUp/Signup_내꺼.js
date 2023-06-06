import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../style";
import { useEffect, useState } from "react";
import {FONT_SIZE,PALETTE} from '../../../../styles/theme'
import styled from "styled-components";
import useAuthValidation from "../../../../hooks/use-auth-validation";
import useWarning from "../../../../hooks/use-warning";
const SignUpForm = () => {



    const [{ email, password, passwordConfirm }, onChangeForm,setValues] = useInputs({
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errorMessages, emailCheck,passwordLengthCheck, passwordConfirmCheck] = useWarning(email, password, passwordConfirm)
    // const disAble = useAuthValidation(email,password,passwordConfirm)
    console.log(errorMessages)
    console.log(passwordLengthCheck)
    // const passwordWarn = () =>{
    //     if (((password.length)< 8)&&(password.length>=1)) {
    //         setPasswordWarning(true)
    //     }
    //     else if((password.length===0)){
    //         setPasswordWarning(null)
    //     }else {
    //         setPasswordWarning(false)
    //     }
    // }

    // const emailCheck = () =>{
    // if (email.includes("@")&&(email.length>=1)) {
    //     setEmailWarning(false)
    //     }
    // else if(email.length===0) {
    //     setEmailWarning(null)
    //     }
    // else {
    //     setEmailWarning(true)
    //     }
    // }
    
    const [passwordWarning,setPasswordWarning] = useState(null)
    const [emailWarning,setEmailWarning] = useState(null)
    const [passwordCheck,setPasswordCheckWord] = useState(null)
    const [disable,setDisable] =useState(true)


   

        // if((password === passowrdConfirm)&&(password.length>=8)&&(passowrdConfirm.length>=8)){
        //     setPasswordCheckWord(true)
        //     setDisable(false)
        // }else if((password.length===0)&&(passowrdConfirm.length===0))
        // {
        //     setPasswordCheckWord(null)
        //     setDisable(null)
        // }else{
        //     setPasswordCheckWord(false)
        //     setDisable(true)
        // }
    
    /* 
            // const disabledButton =()=>{
        //     if ((emailWarning===false) && (passwordWarning===false) && (passwordCheck)) {
        //         setDisable(false)
        //     }else{
        //         setDisable(true)
        //     }
        // }
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
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        if (emailCheck && passwordLengthCheck && passwordConfirmCheck) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    })
    return (
        <S.Form>
            <S.InputBox>
                <label>이메일</label>
                <input onChange={onChangeForm}   name="email" />
            </S.InputBox>
            <Warning>{ errorMessages.email && errorMessages.email.message}</Warning>
            <S.InputBox>
                <label>비밀번호</label>
                <input  onChange={onChangeForm}  name="password" />
            </S.InputBox>
            <Warning>{ errorMessages.password && errorMessages.password.message}</Warning>
            <S.InputBox>
                <label>비밀번호 확인</label>
                <input onChange={onChangeForm}  name="passwordConfirm" />
            </S.InputBox>
            <Warning>{ errorMessages.passwordConfirm &&  errorMessages.passwordConfirm.message}</Warning>
            <BasicButton size={"full"} shape={"default"} variant={"primary"} disabled={isDisabled}>
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
