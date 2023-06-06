import { useState, useEffect } from "react";
import BasicButton from "../../../../components/Button/Button";
import * as S from "../style";
import useInputs from "../../../../hooks/use-inputs";
import { FONT_SIZE, PALETTE } from "../../../../styles/theme";
import styled from "styled-components";
const SignInForm = () => {
  // const [email, onChangeEmail] = useInput();
  // const [password, onChangePassword] = useInput();
  const [{ email, password }, onChangeForm, setValues] = useInputs({
    email: "",
    password: "",
  });
  const onPressSignIn = (e) => {
    // e.preventDefault();
    // console.log(e.target.email.value, e.target.password.value);
  };
  const [disable, setDisable] = useState(true);
  const [passwordWarning, setPasswordWarning] = useState(null);
  const [emailWarning, setEmailWarning] = useState(null);
  const passwordWarn = () => {
    if (password.length < 8 && password.length >= 1) {
      setPasswordWarning(true);
    } else {
      setPasswordWarning(false);
    }
  };
  const passwordWarnWord =
    passwordWarning === true ? "비밀번호는 8자리 이상이어야 합니다." : null;
  const emailCheck = () => {
    if (email.includes("@") && email.length >= 1) {
      setEmailWarning(false);
    } else if (email.length >= 1) {
      setEmailWarning(true);
    }
  };
  const emailWarnWord =
    emailWarning === true ? "이메일 형식을 지켜주세요." : null;
  const disabledButton = () => {
    if (emailWarning === false && passwordWarning === false) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    emailCheck();
    passwordWarn();
    disabledButton();
  }, [email, password]);

  return (
    <S.Form onSubmit={onPressSignIn}>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email" />
      </S.InputBox>
      <Warning>{emailWarnWord}</Warning>
      <S.InputBox>
        <label>비밀번호</label>
        <input onChange={onChangeForm} name="password" />
      </S.InputBox>
      <Warning>{passwordWarnWord}</Warning>
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={"primary"}
        disabled={disable}
      >
        로그인
      </BasicButton>
    </S.Form>
  );
};
export default SignInForm;

const Warning = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.PALETTE.error};
`;
