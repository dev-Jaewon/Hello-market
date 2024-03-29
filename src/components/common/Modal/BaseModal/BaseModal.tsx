import styled from "@emotion/styled";
import { MouseEvent, ReactNode, useEffect } from "react";

export type ModalPropsType = {
    handleModalOpen?: (e: MouseEvent<HTMLElement>) => void;
    children: ReactNode;
};

export const BaseModal = (props: ModalPropsType) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <ModalContainer onClick={props.handleModalOpen} role="region">
            {props.children}
        </ModalContainer>
    );
};

const ModalContainer = styled.section`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
`;
