import styled from "@emotion/styled";
import { ChangeEvent } from "react";

import { HiMinusSm, HiPlusSm } from "react-icons/hi";

export interface CounterType {
    value: number;
    maxValue?: number;
    onChange: (e: number) => void;
}

export const Counter = (props: CounterType) => {
    const checkValue = (value: number) => {
        if (props.maxValue) {
            if (props.maxValue >= value && value >= 0) {
                props.onChange(value);
            } else if (props.maxValue < value) {
                props.onChange(props.maxValue);
            } else if (0 > value) {
                props.onChange(0);
            }
        } else {
            if (value < 0) {
                props.onChange(0);
            } else props.onChange(value);
        }
    };

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        checkValue(Number(e.target.value));
    };

    return (
        <Container>
            <OperatorButton
                value="-"
                aria-label="빼기 버튼"
                onClick={() => checkValue(props.value - 1)}
            >
                <HiMinusSm />
            </OperatorButton>
            <InputBox
                type="number"
                value={props.value}
                onChange={handleChangeValue}
            />
            <OperatorButton
                value="+"
                aria-label="더하기 버튼"
                onClick={() => checkValue(props.value + 1)}
            >
                <HiPlusSm />
            </OperatorButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 88px;
    border: 1px solid rgb(221, 223, 225);
`;

const OperatorButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    cursor: pointer;
`;

const InputBox = styled.input`
    text-align: center;
    border: none;
    width: 30px;

    &:focus {
        outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
