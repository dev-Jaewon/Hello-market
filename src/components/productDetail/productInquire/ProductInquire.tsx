import styled from "@emotion/styled";
import { Fragment, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { productState, setInquirePage } from "../../../store/reducer/product";

import { RiQuestionnaireFill, RiQuestionAnswerFill } from "react-icons/ri";
import { setOpenModal } from "../../../store/reducer/modal";
import { Button } from "../../common/Button/Button";

export type InquireType = {
    id: string;
    title: string;
    author: string;
    createData: string;
    answered: boolean;
    InquireContent: string;
    answerContent: string;
};

export const ProductInquire = () => {
    const dispatch = useDispatch();
    const { inquire } = useSelector(productState);

    const [openQuest, setOpenQuest] = useState<string>("");

    const inquirePageNation = useMemo(() => {
        return inquire.list.length
            ? new Array(Math.ceil(inquire.list.length / 10))
                  .fill(0)
                  .map((_, i) => inquire.list.slice(i * 10, (i + 1) * 10))
            : [];
    }, [inquire.list]);

    const handleInquireClick = (id: string) => {
        if (id === openQuest) {
            setOpenQuest("");
        } else {
            setOpenQuest(id);
        }
    };

    const handleQuestWriteModal = () => {
        dispatch(setOpenModal("question"));
    };

    const setPage = (page: number) => {
        dispatch(setInquirePage(page));
    };

    return (
        <Container>
            <HeaderContainer>
                <h1>상품문의</h1>
                <Button
                    fillColor
                    width={120}
                    height={40}
                    onClick={handleQuestWriteModal}
                >
                    문의하기
                </Button>
            </HeaderContainer>
            <InquireDescription>
                <li>
                    상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                    다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                </li>
                <li>
                    배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항에 대해
                    문의해보세요.
                </li>
            </InquireDescription>
            <InquireTable>
                <thead>
                    <tr>
                        <th className="title">제목</th>
                        <th className="author">작성자</th>
                        <th className="createdData">작성일</th>
                        <th className="answered">답변상태</th>
                    </tr>
                </thead>
                <tbody>
                    {inquirePageNation && inquirePageNation.length ? (
                        inquirePageNation[inquire.currentPage].map(
                            (content: any) => {
                                return (
                                    <Fragment key={content.id}>
                                        <tr
                                            onClick={() =>
                                                handleInquireClick(content.id)
                                            }
                                        >
                                            <td>{content.name}</td>
                                            <td>{content.author}</td>
                                            <td>{content.createDate}</td>
                                            <td>
                                                {content.answered ? (
                                                    <Answered>
                                                        답변완료
                                                    </Answered>
                                                ) : (
                                                    "미답변"
                                                )}
                                            </td>
                                        </tr>
                                        {openQuest === content.id &&
                                            content.answered && (
                                                <InQuireContainer>
                                                    <td colSpan={4}>
                                                        <div>
                                                            <i>
                                                                <RiQuestionnaireFill
                                                                    size={24}
                                                                    color={
                                                                        "rgb(160, 66, 153)"
                                                                    }
                                                                />
                                                            </i>
                                                            <div>
                                                                {
                                                                    content.content
                                                                }
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <i>
                                                                <RiQuestionAnswerFill
                                                                    size={24}
                                                                    color={
                                                                        "var(--brand)"
                                                                    }
                                                                />
                                                            </i>
                                                            <div>
                                                                {
                                                                    content.answerContent
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </InQuireContainer>
                                            )}
                                    </Fragment>
                                );
                            }
                        )
                    ) : (
                        <tr>
                            <NotInquire colSpan={4}>
                                <p>작성된 문의내용이 없습니다.</p>
                            </NotInquire>
                        </tr>
                    )}
                </tbody>
            </InquireTable>
            <PageNationContainer>
                <button
                    disabled={inquire.currentPage === 0}
                    onClick={() => setPage(inquire.currentPage - 1)}
                >
                    <SlArrowLeft size={20} />
                </button>
                <button
                    disabled={
                        inquire.currentPage === inquirePageNation.length - 1
                    }
                    onClick={() => setPage(inquire.currentPage + 1)}
                >
                    <SlArrowRight size={20} />
                </button>
            </PageNationContainer>
        </Container>
    );
};

const Container = styled.section``;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: 600;
    }
`;

const InquireDescription = styled.ul`
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
`;

const InquireTable = styled.table`
    width: 100%;
    margin-top: 50px;
    border-collapse: collapse;
    font-size: 15px;

    thead {
        height: 60px;
        border-top: 2px solid black;
        border-bottom: 1px solid #333;

        .title {
            flex: 1;
        }

        .author {
            width: 100px;
        }
        .createdData {
            width: 100px;
        }
        .answered {
            width: 100px;
        }
    }

    tbody {
        tr {
            height: 64px;
            border-bottom: 1px solid rgb(244, 244, 244);
            cursor: pointer;
        }

        td {
            &:nth-of-type(1) {
                padding-left: 20px;
            }

            &:not(:nth-of-type(1)) {
                text-align: center;
            }
        }
    }
`;

const InQuireContainer = styled.tr`
    td {
        background-color: rgb(250, 250, 250);

        & > div {
            display: flex;
            padding: 20px;
            font-weight: 400;
        }

        i {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            color: rgb(220, 140, 215);
            margin-right: 10px;
        }
    }
`;

const NotInquire = styled.td`
    text-align: center;
    padding: 20px;
`;

const Answered = styled.p`
    color: var(--brand);
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
