import * as S from '../style'
import BasicButton from "../Button/Button";

const SignUpForm = () => {
    return (
        <S.Form>
            <S.InputBox><label>이메일</label><input/></S.InputBox>
            <S.InputBox><label>비밀번호</label><input/></S.InputBox>
            <S.InputBox><label>비밀번호 확인</label><input/></S.InputBox>
            <BasicButton size={"full"} shape={"default"} variant={"primary"}>회원가입</BasicButton>
        </S.Form>
    )
}
export default SignUpForm