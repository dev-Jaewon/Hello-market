import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../../store/reducer/modal";

export const ProductReview = () => {
    const dispatch = useDispatch();

    const handeImagesClick = () => {
        dispatch(setOpenModal("images"));
    };

    return (
        <Container>
            <h1>상품후기</h1>
            <ReviewDescriptionContainer>
                <p>사진후기 100원, 글후기 50원 적립금 혜택이 있어요.</p>
                <ul>
                    <li>
                        퍼플, 더퍼플은 2배 적립 (사진 200원, 글 100원) / 주간
                        베스트 후기로 선정 시 5,000원을 추가 적립
                    </li>
                    <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
                    <li>
                        작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일
                        기준 평균 1~2일 소요)
                    </li>
                </ul>
            </ReviewDescriptionContainer>
            <ReviewImageContainer onClick={handeImagesClick}>
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
                <img
                    src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                    alt=""
                />
            </ReviewImageContainer>
            <TableHeader>
                <div>
                    <span>총</span>
                    <span>0개</span>
                </div>
            </TableHeader>
            <ReviewList>
                <Review>
                    <div className="author">장**</div>
                    <div className="reviewContent">
                        <p className="name">이 물건 이름</p>
                        <p className="content">이 물건 콘텐트 이름</p>
                        <p className="createDate">2023.03.23</p>
                    </div>
                </Review>
            </ReviewList>
        </Container>
    );
};

const Container = styled.section`
    padding-bottom: 80px;
`;

const ReviewDescriptionContainer = styled.div`
    padding-top: 20px;

    p {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 500;
        color: var(--black);
    }

    ul {
        padding-bottom: 40px;
        list-style: none;
        font-size: 14px;
        font-weight: 400;
        color: rgb(153, 153, 153);

        li {
            position: relative;

            &:before {
                content: "•";
                margin-right: 10px;
                position: relative;
            }
        }
    }
`;

const ReviewImageContainer = styled.div`
    display: flex;
    width: fit-content;
    overflow: hidden;
    border-radius: 10px;
    gap: 8px;

    img {
        width: 124px;
        height: 124px;
        object-fit: cover;
        cursor: pointer;
    }
`;

const TableHeader = styled.div`
    margin: 30px 0;
    font-size: 12px;
    line-height: 16px;
`;

const ReviewList = styled.div`
    border-top: 1px solid rgb(51, 51, 51);
`;

const Review = styled.div`
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid rgb(244, 244, 244);

    .author {
        width: 225px;
    }

    .reviewContent {
        display: flex;
        font-size: 14px;
        flex-direction: column;
        gap: 20px;

        .name {
            font-weight: 400;
            line-height: 19px;
            color: rgb(153, 153, 153);
        }

        .content {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: rgb(51, 51, 51);
        }

        .createDate {
            color: rgb(153, 153, 153);
        }
    }
`;
