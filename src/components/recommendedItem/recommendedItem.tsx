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
    description: string;
    disCountRate: number;
    comentLength: number;
    beforeDiscountPrice: number;
};

export const RecommendedItem = (props: RecommendedItemType) => {
    return (
        <Container>
            <Link href={`/product/${props.id}`}>
                <ImageContainer>
                    <img src={props.imgUrl} alt="" />
                </ImageContainer>
                <ProductDescribe aria-hidden={true} data-testid="상품설명">
                    {props.description}
                </ProductDescribe>
                <ProductName data-testid="상품이름">{props.name}</ProductName>
                <PriceInfoContainer>
                    {props.disCountRate > 0 && (
                        <DisCountRate
                            aria-label={`할인율${props.disCountRate}퍼센트`}
                        >
                            {props.disCountRate}%
                        </DisCountRate>
                    )}
                    <Price>{addCommaToNumber(props.price)}원</Price>
                </PriceInfoContainer>
                <BeforDiscountRate aria-hidden={true} data-testid="할인전가격">
                    {addCommaToNumber(props.beforeDiscountPrice)}원
                </BeforDiscountRate>
                <ReviewContainer>
                    <i>
                        <BiMessageSquareDots size={15} />
                    </i>
                    <p>후기</p>
                    <span
                        aria-label={`리뷰${props.comentLength}개`}
                        data-testid="reviewIcon"
                    >
                        {props.comentLength}
                    </span>
                </ReviewContainer>
            </Link>
            <CartIcon data-testid="카트추가아이콘" aria-label="장바구니넣기">
                <BsCart2 size="23px" />
            </CartIcon>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: inherit;
    cursor: pointer;

    & > a:hover {
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

const CartIcon = styled.button`
    position: absolute;
    top: 250px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: white;
    background-color: var(--brand);
    opacity: 0.6;
    border: none;
    cursor: pointer;

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
    overflow: hidden;
    white-space: nowrap;
    white-space: nowrap;
    text-overflow: ellipsis;
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
