import { FormEvent } from "react";
import styled from "@emotion/styled";

import { Input } from "../components/common/Input/Input";
import { Button } from "../components/common/Button/Button";

export const Signup = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};
    return (
        <ComponentContainer>
            <form onSubmit={handleSubmit}>
                <ItemContainer>
                    <Input
                        type="text"
                        placeholder="아이디"
                        id="input-id"
                    ></Input>
                    <Button width={120} height={44} onClick={}>
                        중복확인
                    </Button>
                </ItemContainer>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    id="input-pwd"
                ></Input>
                <ItemContainer></ItemContainer>
                <ItemContainer>
                    <Input
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        id="input-pwd-re"
                    ></Input>
                </ItemContainer>
                <ItemContainer>
                    <Input
                        type="text"
                        placeholder="이름을 입력해 주세요"
                        id="input-name"
                    ></Input>
                </ItemContainer>
                <ItemContainer>
                    <Input
                        type="text"
                        placeholder="예:app235@naver.com"
                        id="input-email"
                    ></Input>
                </ItemContainer>

                <Button width={240} height={56}>
                    가입하기
                </Button>
            </form>
        </ComponentContainer>
    );
};

export default Signup;

const ComponentContainer = styled.section`
    display: flex;
    width: 100%;
    max-width: 640px;
`;

const ItemContainer = styled.div`
    display: flex;
`;
