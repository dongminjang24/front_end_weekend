import { useEffect, useState } from "react";
import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../style";
import axios from "axios";
import AuthApi from "apis/auth.api";

const SignUpForm = ({ setIsFormLogin }) => {
  const [{ email, password, passowrdConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passowrdConfirm: "",
  });

  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  useEffect(() => {
    if (password !== passowrdConfirm) return setIsPasswordConfirm(false);
    setIsPasswordConfirm(true);
  }, [password, passowrdConfirm]);


  const handleSignUpSumbit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    if (!isPasswordConfirm) return;
    await AuthApi.singUp(email, password);
    alert("축하합니다. 회원가입이 완료되었습니다");
    setIsFormLogin(true);
  };
  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input onChange={onChangeForm} name="password" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label>
        <input onChange={onChangeForm} name="passowrdConfirm" />
      </S.InputBox>
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={"primary"}
        onClick={handleSignUpSumbit}
      >
        회원가입
      </BasicButton>
    </S.Form>
  );
};
export default SignUpForm;
