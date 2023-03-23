import { BaseModal } from "../BaseModal/BaseModal";
import styled from "@emotion/styled";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../../../store/reducer/modal";

export const ImagesModal = () => {
    const dispatch = useDispatch();

    const handleCloseClick = () => {
        dispatch(setOpenModal(null));
    };

    const handleReviewClick = () => {
        dispatch(setOpenModal("review"));
    };

    return (
        <BaseModal>
            <Container>
                <Header>
                    <h1>사진 후기 전체보기</h1>
                    <i onClick={handleCloseClick} aria-label="닫힘버튼">
                        <GrClose size={24} />
                    </i>
                </Header>
                <Content>
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
                    <img
                        onClick={handleReviewClick}
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt=""
                    />
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
    height: 700px;
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
    display: grid;
    height: 590px;
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
