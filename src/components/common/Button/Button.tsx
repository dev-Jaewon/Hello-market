import styled from "@emotion/styled";

export type ButtonProps = {
    children: string; //ReactNode 타입자체가 option Type으로 get Require 유틸리티 타입으로 못가져와서 string으로 지정
    width: number;
    height: number;
    fillColor?: boolean;
    outline?: boolean;
    disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
    return <ButtonStyle {...props} />;
};

const ButtonStyle = styled.button<ButtonProps>`
    background: ${({ fillColor }) => (fillColor ? "var(--brand)" : "unset")};
    border: ${({ outline }) => (outline ? "1px solid var(--brand)" : "none")};
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    border-radius: 4px;
`;
