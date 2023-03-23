import styled from "@emotion/styled";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../../../store/reducer/modal";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { BaseModal } from "../BaseModal/BaseModal";

export const QuestionModal = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCloseClick = () => {
        dispatch(setOpenModal(null));
    };

    return (
        <BaseModal>
            <ContentContainer>
                <ProductHead>
                    <h1>상품 문의하기</h1>
                    <i onClick={handleCloseClick} aria-label="닫힘버튼">
                        <GrClose size={24} />
                    </i>
                </ProductHead>
                <ProductInfo>
                    <img
                        src="https://hello-market.s3.ap-northeast-2.amazonaws.com/image/makaron.jpg"
                        alt="상품 이미지"
                    />
                    <p>상품 이름</p>
                </ProductInfo>
                <ProductQuestionContent>
                    <div>
                        <label htmlFor="inquire-title" className="itemName">
                            제목
                        </label>
                        <div className="inputName">
                            <Input
                                id="inquire-title"
                                type="text"
                                placeholder="제목을 입력해 주세요"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="inquire-content" className="itemName">
                            내용
                        </label>
                        <textarea
                            id="inquire-content"
                            className="InquireContent"
                            placeholder="상품문의 작성 전 확인해 주세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </ProductQuestionContent>
                <SubmitContainer>
                    <Button
                        width={160}
                        height={60}
                        outline
                        onClick={handleCloseClick}
                    >
                        취소
                    </Button>
                    <Button
                        width={160}
                        height={60}
                        disabled={Boolean(!title || !content)}
                        fillColor={Boolean(title && content)}
                    >
                        등록
                    </Button>
                </SubmitContainer>
            </ContentContainer>
        </BaseModal>
    );
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 800px;
    border-radius: 12px;
    padding: 30px;
`;

const ProductHead = styled.div`
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;

    h1 {
        font-weight: 600;
    }

    i {
        cursor: pointer;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid rgb(244, 244, 244);
    border-bottom: 1px solid rgb(244, 244, 244);

    img {
        object-fit: cover;
        width: 72px;
        height: 72px;
        border-radius: 10px;
        margin-right: 25px;
    }
`;

const ProductQuestionContent = styled.div`
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    border-bottom: 1px solid rgb(244, 244, 244);
    gap: 10px;

    input {
        padding: 10px 0;
        font-size: 16px;
    }

    & > div {
        display: flex;
        width: 100%;

        .itemName {
            padding-top: 5px;
            padding-left: 10px;
            width: 100px;
        }

        .inputName {
            flex: 1 1;
        }

        .InquireContent {
            height: 200px;
        }
    }

    textarea {
        flex: 1 1;
        padding: 10px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid rgb(221, 221, 221);

        &:focus {
            outline: none;
            border: 1px solid rgb(51, 51, 51);
        }
    }
`;

const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
`;
