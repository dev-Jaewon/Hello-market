import styled from "@emotion/styled";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../../../store/reducer/modal";
import { Button } from "../../Button/Button";
import { BaseModal } from "../BaseModal/BaseModal";

export const DetailRew = () => {
    const dispatch = useDispatch();

    const handleCloseClick = () => {
        dispatch(setOpenModal(null));
    };

    const handleMoveImagesClick = () => {
        dispatch(setOpenModal("images"));
    };

    return (
        <BaseModal>
            <Container>
                <Header>
                    <h1>사진 후기</h1>
                    <i onClick={handleCloseClick} aria-label="닫힘버튼">
                        <GrClose size={24} />
                    </i>
                </Header>
                <Content>
                    <img src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg" />
                    <ReviewInfo>
                        <p className="author">장**</p>
                        <p className="productName">가나다라 상품</p>
                        <div className="productContent">상품이 매우 좋아요</div>
                        <p className="createDate">2023.03.28</p>
                    </ReviewInfo>
                </Content>
                <div className="buttonContainer">
                    <Button
                        outline
                        width={170}
                        height={55}
                        onClick={handleMoveImagesClick}
                    >
                        사진 목록 보기
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

const Header = styled.head`
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
