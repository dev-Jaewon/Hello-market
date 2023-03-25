import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { setOpenModal } from "../../../store/reducer/modal";
import {
    productState,
    setCurrentReviewId,
} from "../../../store/reducer/product";
import { useMemo, useState } from "react";

export const ProductReview = () => {
    const dispatch = useDispatch();
    const { reviews } = useSelector(productState);
    const [page, setPage] = useState(0);

    const pageNation = useMemo(() => {
        return reviews.list.length
            ? new Array(Math.ceil(reviews.list.length / 10))
                  .fill(0)
                  .map((_, i) => reviews.list.slice(i * 10, (i + 1) * 10))
            : [];
    }, [reviews.list]);

    const handleDetailReview = (id: string) => {
        dispatch(setCurrentReviewId(id));
        dispatch(setOpenModal("review"));
    };

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
            <ReviewImageContainer>
                {reviews.list.slice(0, 8).map((review, i) => {
                    return (
                        <div className="imageContainer" key={review.id}>
                            <img
                                src={review.imageUrl}
                                alt={review.id}
                                onClick={() => handleDetailReview(review.id)}
                            />
                            {i === 7 && (
                                <MoreView onClick={handeImagesClick}>
                                    + 더보기
                                </MoreView>
                            )}
                        </div>
                    );
                })}
            </ReviewImageContainer>
            <TableHeader>
                <div>
                    <span>총</span>
                    <span>{reviews.list.length}</span>
                    <span>개</span>
                </div>
            </TableHeader>
            <ReviewList>
                {pageNation.length ? (
                    pageNation[page].map((review, i) => {
                        return (
                            <Review key={review.id}>
                                <div className="author">{review.author}</div>
                                <div className="reviewContent">
                                    <p className="name">{review.name}</p>
                                    <p className="content">{review.content}</p>
                                    <img
                                        onClick={() =>
                                            handleDetailReview(review.id)
                                        }
                                        src={review.imageUrl}
                                        alt={review.id}
                                    />
                                    <p className="createDate">
                                        {review.createDate}
                                    </p>
                                </div>
                            </Review>
                        );
                    })
                ) : (
                    <NotReview>
                        <i>
                            <HiOutlineExclamationCircle size={40} />
                        </i>
                        <div>등록된 리뷰가 없습니다.</div>
                    </NotReview>
                )}
            </ReviewList>
            <PageNationContainer>
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                    <SlArrowLeft size={20} />
                </button>
                <button
                    disabled={page === pageNation.length - 1}
                    onClick={() => setPage(page + 1)}
                >
                    <SlArrowRight size={20} />
                </button>
            </PageNationContainer>
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

    .imageContainer {
        position: relative;
    }

    img {
        width: 124px;
        height: 124px;
        object-fit: cover;
        cursor: pointer;
    }
`;

const TableHeader = styled.div`
    margin: 40px 0 20px 0;
    font-size: 14px;
    line-height: 16px;

    div {
        display: flex;
        gap: 5px;
    }
`;

const ReviewList = styled.div`
    border-top: 1px solid rgb(51, 51, 51);
`;

const Review = styled.div`
    position: relative;
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid rgb(244, 244, 244);

    .author {
        width: 225px;
    }

    .reviewContent {
        flex: 1 1;
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

        img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`;

const MoreView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    color: white;
    font-weight: 800;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
`;

const NotReview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    font-size: 20px;
    font-weight: 400;
    color: rgb(181, 181, 181);
`;

const PageNationContainer = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button {
        display: inline-block;
        padding: 10px;
        border: 1px solid black;
        background-color: unset;
        border-radius: 4px;
        cursor: pointer;

        &:disabled {
            border: 1px solid #999999;
            cursor: auto;
        }
    }
`;
