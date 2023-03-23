import Link from "next/link";
import styled from "@emotion/styled";
import { BsCart2 } from "react-icons/bs";
import { BiMessageSquareDots } from "react-icons/bi";
import { addCommaToNumber } from "../../utils/utils";

export type RecommendedItemType = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
    describe: string;
    disCountRate: number;
    comentLength: number;
    beforeDiscountPrice: number;
};

export const RecommendedItem = (props: RecommendedItemType) => {
    return (
        <Container href={`/product/${props.id}`}>
            <ImageContainer>
                <img src={props.imgUrl} alt={props.name + "제품 이미지"} />
                <CartIcon aria-label="상품을 카트에 추가하는 아이콘">
                    <BsCart2 size="23px" />
                </CartIcon>
            </ImageContainer>
            <ProductName aria-label="상품이름">{props.name}</ProductName>
            <ProductDescribe aria-label="상품설명">
                {props.describe}
            </ProductDescribe>
            <PriceInfoContainer>
                {props.disCountRate && (
                    <DisCountRate aria-label="할인율">
                        {props.disCountRate}%
                    </DisCountRate>
                )}
                <Price aria-label="상품가격">
                    {addCommaToNumber(props.price)}원
                </Price>
            </PriceInfoContainer>
            <BeforDiscountRate aria-label="할인전가격">
                {addCommaToNumber(props.beforeDiscountPrice)}원
            </BeforDiscountRate>
            <ReviewContainer>
                <i>
                    <BiMessageSquareDots size={15} aria-label="리뷰 아이콘" />
                </i>
                <p>후기</p>
                <span aria-label="리뷰숫자">{props.comentLength}</span>
            </ReviewContainer>
        </Container>
    );
};

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    width: fit-content;
    cursor: pointer;

    &:hover {
        text-decoration: unset;
    }
`;

const ImageContainer = styled.div`
    margin-bottom: 14px;
    position: relative;
    width: 250px;
    height: 320px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #ebebeb;
    }

    i {
        position: absolute;
        bottom: 16px;
        right: 16px;
    }
`;

const CartIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: white;
    background-color: var(--brand);
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }
`;

const ProductName = styled.h2`
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: var(--black);
`;

const ProductDescribe = styled.p`
    margin-bottom: 4px;
    color: rgb(153, 153, 153);
    font-size: 12px;
`;

const PriceInfoContainer = styled.div`
    display: flex;
    gap: 5px;
`;

const DisCountRate = styled.span`
    color: orange;
    font-size: 16px;
    font-weight: 800;
`;

const BeforDiscountRate = styled.p`
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: line-through;
`;

const ReviewContainer = styled.div`
    display: flex;
    padding-top: 1opx;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: gray;
    color: rgb(153, 153, 153);
    gap: 4px;

    i {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(1px);
    }
`;

const Price = styled.span`
    color: var(--black);
    font-weight: 800;
`;
