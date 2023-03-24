import styled from "@emotion/styled";
import { MouseEvent, useMemo } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../../../store/reducer/modal";
import { productState } from "../../../../store/reducer/product";
import { Button } from "../../Button/Button";
import { BaseModal } from "../BaseModal/BaseModal";

export const DetailReview = () => {
    const dispatch = useDispatch();
    const { reviews } = useSelector(productState);

    const reviewData = useMemo(() => {
        return reviews.list.find((review) => review.id === reviews.currentId);
    }, [reviews.currentId]);

    const handleCloseClick = () => {
        dispatch(setOpenModal(null));
    };

    const handleMoveImagesClick = () => {
        dispatch(setOpenModal("images"));
    };

    const handleMoalOpen = (e: MouseEvent<HTMLElement>) => {
        if (e.currentTarget === e.target) dispatch(setOpenModal(null));
    };

    return (
        <BaseModal handleModalOpen={handleMoalOpen}>
            <Container>
                <MoodalHead>
                    <h1>사진 후기</h1>
                    <i onClick={handleCloseClick} aria-label="닫힘버튼">
                        <GrClose size={24} />
                    </i>
                </MoodalHead>
                <Content>
                    <img
                        src={reviewData?.imageUrl}
                        alt={`${reviewData?.name} 이미지`}
                    />
                    <ReviewInfo>
                        <p className="author">{reviewData?.author}</p>
                        <p className="productName">{reviewData?.name}</p>
                        <div className="productContent">
                            {reviewData?.content}
                        </div>
                        <p className="createDate">{reviewData?.createDate}</p>
                    </ReviewInfo>
                </Content>
                <div className="buttonContainer">
                    <Button
                        outline
                        width={170}
                        height={55}
                        onClick={handleMoveImagesClick}
                    >
                        사진목록 보기
                    </Button>
                </div>
            </Container>
        </BaseModal>
    );
};

const Container = styled.div`
    position: relative;
    background: white;
    border-radius: 15px;
    padding: 30px;
    width: 800px;
    height: 700px;

    .buttonContainer {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%, 0);
    }
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
    display: flex;
    padding: 30px 0;

    img {
        width: 370px;
        height: 490px;
        border-radius: 5px;
        object-fit: cover;
    }
`;

const ReviewInfo = styled.div`
    padding-left: 20px;

    .author {
        display: flex;
        align-items: center;
        margin-bottom: 11px;
    }

    .productName {
        color: rgb(153, 153, 153);
        font-size: 12px;
        margin-bottom: 11px;
    }

    .productContent {
        color: var(--black);
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 11px;
    }

    .createDate {
        font-size: 12px;
        color: rgb(153, 153, 153);
    }
`;
