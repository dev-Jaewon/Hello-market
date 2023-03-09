import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent } from "react";

export type InputProps = {
    type: "text" | "password";
    id?: string;
    value?: string | number;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const child = e.currentTarget.children[0];

        if (child.tagName === "INPUT") {
            (child as HTMLInputElement).focus();
        }
    };

    return (
        <Container onClick={handleClick} id={props.id}>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
    padding: 0 15px 0 11px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);

    &:focus-within {
        border: 1px solid rgb(51, 51, 51);
    }

    input {
        flex: 1;
        border: none;
        font-size: 14;

        &:focus {
            outline: none;
        }
    }
`;
