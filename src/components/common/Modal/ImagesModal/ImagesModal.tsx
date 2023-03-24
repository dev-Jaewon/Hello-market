import { BaseModal } from "../BaseModal/BaseModal";
import styled from "@emotion/styled";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../../../store/reducer/modal";
import {
    productState,
    setCurrentReviewId,
} from "../../../../store/reducer/product";
import { MouseEvent } from "react";

export const ImagesModal = () => {
    const dispatch = useDispatch();
    const { reviews } = useSelector(productState);

    const handleCloseClick = () => {
        dispatch(setOpenModal(null));
    };

    const handleReviewClick = (id: string) => {
        dispatch(setCurrentReviewId(id));
        dispatch(setOpenModal("review"));
    };

    const handleMoalOpen = (e: MouseEvent<HTMLElement>) => {
        if (e.currentTarget === e.target) dispatch(setOpenModal(null));
    };

    return (
        <BaseModal handleModalOpen={handleMoalOpen}>
            <Container>
                <MoodalHead>
                    <h1>사진 후기 전체보기</h1>
                    <i onClick={handleCloseClick} aria-label="닫힘버튼">
                        <GrClose size={24} />
                    </i>
                </MoodalHead>
                <Content>
                    {reviews.list.length ? (
                        reviews.list.map((review) => (
                            <img
                                onClick={() => handleReviewClick(review.id)}
                                src={review.imageUrl}
                                alt={review.name + "이미지"}
                                key={review.id}
                            />
                        ))
                    ) : (
                        <div>데이터 없음</div>
                    )}
                </Content>
            </Container>
        </BaseModal>
    );
};

const Container = styled.div`
    background: white;
    border-radius: 15px;
    padding: 30px;
    width: 800px;
`;

const MoodalHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(244, 244, 244);
    padding-bottom: 20px;

    h1 {
        font-weight: 600;
    }

    i {
        cursor: pointer;
    }
`;

const Content = styled.div`
    display: grid;
    height: 100%;
    max-height: 590px;
    padding-top: 30px;
    grid-template-columns: repeat(6, 120px);
    gap: 3px;
    overflow: hidden;
    overflow-y: scroll;

    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        cursor: pointer;
    }
`;
