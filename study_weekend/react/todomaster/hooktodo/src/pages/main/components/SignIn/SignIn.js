
import BasicButton from "../Button/Button";
import * as S from "../style";

const SignInForm = () => {
  return (
    <S.Form>
      <S.InputBox>
        <label>이메일 </label> <input />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 </label> <input />
      </S.InputBox>
      <BasicButton variant={"primary"} shape={"default"} size={"full"}>
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;