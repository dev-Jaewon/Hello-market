import styled from "@emotion/styled";
import { BaseModal } from "../BaseModal/BaseModal";
import { useDispatch, useSelector } from "react-redux";
import {
    modalState,
    setOpenModal,
    setContent,
} from "../../../../store/reducer/modal";
import { MouseEvent, useEffect } from "react";

export type NotifiedModalProps = { value: string };

export const NotifiedModal = () => {
    const dispatch = useDispatch();
    const { content } = useSelector(modalState);

    const handleMoalOpen = (e: MouseEvent<HTMLElement>) => {
        if (e.currentTarget === e.target) dispatch(setOpenModal(null));
    };

    useEffect(() => {
        return () => {
            dispatch(setContent(""));
            dispatch(setOpenModal(null));
        };
    }, []);

    return (
        <BaseModal handleModalOpen={handleMoalOpen}>
            <ContentContainer>
                <Content role="content">{content}</Content>
                <ButtonContainer>
                    <button onClick={handleMoalOpen}>확인</button>
                </ButtonContainer>
            </ContentContainer>
        </BaseModal>
    );
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 360px;
    border-radius: 12px;
`;

const Content = styled.div`
    padding: 40px 30px;
    font-size: 16px;
    text-align: center;
    min-height: 100px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    &::before {
        content: "";
        width: 100%;
        height: 1px;
        border-top: 1px solid rgb(247, 247, 247);
    }

    button {
        height: 55px;
        border: unset;
        background: unset;
        font-size: 16px;
        color: var(--brand);
        cursor: pointer;
    }
`;
