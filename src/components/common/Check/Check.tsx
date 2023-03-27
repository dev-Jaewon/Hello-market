import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

export type CheckPropsType = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
};

export const Check = ({ children, ...props }: CheckPropsType) => {
    return (
        <Container htmlFor={props.id}>
            <input type="checkbox" {...props} id={props.id} />
            <i aria-label="체크 아이콘">
                {props.checked ? (
                    <BsCheckCircleFill size={24} color={`var(--brand)`} />
                ) : (
                    <BsCheckCircle size={24} color={`var(--brand)`} />
                )}
            </i>
            {children && <div>{children}</div>}
        </Container>
    );
};

const Container = styled.label`
    display: flex;
    cursor: pointer;

    input {
        overflow: hidden;
        position: absolute;
        clip: rect(0px, 0px, 0px, 0px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
    }

    i {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        cursor: pointer;
    }
`;
