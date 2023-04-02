import { FormEvent, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "../components/common/Input/Input";
import { Button } from "../components/common/Button/Button";
import { useRouter } from "next/router";
import { postSignIn } from "../utils/api";
import { useDispatch } from "react-redux";
import { setContent, setOpenModal } from "../store/reducer/modal";
import { setLoginInfo } from "../store/reducer/user";

const Signin = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSignupClick = () => {
        router.push("/signup");
    };

    const handleSignInClick = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data } = await postSignIn({ id, password });
            dispatch(setLoginInfo(data.message));
            router.push("/");
        } catch (error: any) {
            dispatch(setOpenModal("notified"));
            dispatch(setContent(error?.response.data.message));
        }
    };

    return (
        <Container>
            <form onSubmit={handleSignInClick}>
                <h1>로그인</h1>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    ></Input>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                </InputContainer>
                <ButtonContainer>
                    <Button width={360} height={48} fillColor>
                        로그인
                    </Button>
                    <Button
                        width={360}
                        height={48}
                        outline
                        onClick={handleSignupClick}
                    >
                        회원가입
                    </Button>
                </ButtonContainer>
            </form>
        </Container>
    );
};

export default Signin;

const Container = styled.section`
    padding: 100px 0;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h1 {
        padding: 30px 0;
    }
`;

const InputContainer = styled.div`
    width: 360px;
    height: 48px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
