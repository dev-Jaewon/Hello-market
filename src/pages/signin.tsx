import React from "react";
import styled from "@emotion/styled";

import { Input } from "../components/common/Input/Input";

const Signin = () => {
    return (
        <InputContainer>
            <Input type="text" placeholder="아이디를 입력해주세요"></Input>
        </InputContainer>
    );
};

export default Signin;

const InputContainer = styled.div`
    height: 48px;
`;
