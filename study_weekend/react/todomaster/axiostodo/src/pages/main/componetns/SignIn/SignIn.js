import { useNavigate } from "react-router-dom";

import * as S from "../style";
import BasicButton from "components/Button/Button";

import { useUserStore } from "contexts/auth";
const SignInForm = () => {
  const navigate = useNavigate();
  const { onPressSignIn } = useUserStore();
  return (
    <S.Form
      onSubmit={(e) => {
        onPressSignIn(e);
        navigate("/todo/3");
      }}
    >
      <S.InputBox>
        <label>이메일</label>
        <input name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name="password" />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        로그인
      </BasicButton>
    </S.Form>
  );
};
export default SignInForm;
