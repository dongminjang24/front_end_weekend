
import BasicButton from "../Button/Button";
import * as S from "../style";
import { useState } from "react";
import useInput from "../../../../hooks/use-input";
const SignInForm = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  // let email = '';
  // let password = '';
  const onChangeEmail = (e)=>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  const onChangePassword = (e)=>{
    e.preventDefault()
    setPassword(e.target.value)
  }
  return (
    <S.Form>
      <S.InputBox>
        <label>이메일 </label> <input value={email} onChange={onChangeEmail}/>
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 </label> <input value={password} onChange={onChangePassword}/>
      </S.InputBox>
      <BasicButton variant={"primary"} shape={"default"} size={"full"}>
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;