import { useState } from "react";
import BasicButton from "../../../../components/Button/Button";
import * as S from "../style";
import useInput from "../../../../hooks/use-input";

const SignInForm = () => {
    // const [email, onChangeEmail] = useInput();
    // const [password, onChangePassword] = useInput();

    const onPressSignIn = (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);
    };

    return (
        <S.Form onSubmit={onPressSignIn}>
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
