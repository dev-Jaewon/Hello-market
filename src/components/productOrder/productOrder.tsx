import { useState } from "react";
import { addCommaToNumber } from "../../utils/utils";
import styled from "@emotion/styled";

import { Counter } from "../common/Counter/Counter";
import { Button } from "../common/Button/Button";

export type ProductOrderType = {
    id: string;
    name: string;
    price: number;
    describe: string;
    thumnailImgUrl: string;
    disCountRate: number;
    beforeDiscountPrice: number;
    packagingType: string;
    weight: string;
    countryOfOrigin: string;
    each: string;
    seller: string;
};

export const ProductOrder = (props: ProductOrderType) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Container>
            <Thumbnail
                src={props.thumnailImgUrl}
                alt={`${props.name} 이미지`}
            />
            <InfoContainer>
                <ProductName aria-label="상품이름">{props.name}</ProductName>
                <ProductDescribe aria-label="상품설명">
                    {props.describe}
                </ProductDescribe>
                <PriceContainer>
                    <ProductDisCountRate aria-label="할인율">
                        {props.disCountRate}%
                    </ProductDisCountRate>
                    <ProductPrice aria-label="상품가격">
                        {addCommaToNumber(props.price)}
                    </ProductPrice>
                    <Unit>원</Unit>
                </PriceContainer>
                <ProductBeforeDiscountPrice aria-label="할인전 가격">
                    {addCommaToNumber(props.beforeDiscountPrice)}원
                </ProductBeforeDiscountPrice>
                <ItemContainer>
                    <Item>
                        <div>배송</div>
                        <div>
                            <div>랜덤배송</div>
                            <ItemDescription>
                                23시 전 주문 시 내일 아침 7시 전 도착
                            </ItemDescription>
                            <ItemDescription>
                                대구·부산·울산 샛별배송 운영시간 별도 확인
                            </ItemDescription>
                        </div>
                    </Item>
                    <Item>
                        <div>판매자</div>
                        <ProductSeller aria-label="판매자">
                            {props.seller}
                        </ProductSeller>
                    </Item>
                    <Item>
                        <div>포장타입</div>
                        <div>
                            <ProductPackagingType aria-label="포장타입">
                                {props.packagingType}
                            </ProductPackagingType>
                            <ItemDescription>
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </ItemDescription>
                        </div>
                    </Item>
                    <Item>
                        <div>판매단위</div>
                        <ProductEach aria-label="판매단위">
                            {props.each}
                        </ProductEach>
                    </Item>

                    <Item>
                        <div>중량/용량</div>
                        <ProductWeight aria-label="상품무게">
                            {props.weight}
                        </ProductWeight>
                    </Item>

                    <Item>
                        <div>원산지</div>
                        <ProductOrigin aria-label="원산지">
                            {props.countryOfOrigin}
                        </ProductOrigin>
                    </Item>
                    <Item>
                        <div>상품선택</div>
                        <ProductSelectCount>
                            <p>{props.name}</p>
                            <p>적립제외상품</p>
                            <div>
                                <Counter
                                    value={quantity}
                                    maxValue={10}
                                    onChange={(v) => setQuantity(v)}
                                />
                                <div>
                                    <p className="beforSalePrice">
                                        {addCommaToNumber(
                                            props.beforeDiscountPrice
                                        )}
                                        원
                                    </p>
                                    <p className="price">
                                        {addCommaToNumber(props.price)}원
                                    </p>
                                </div>
                            </div>
                        </ProductSelectCount>
                    </Item>
                </ItemContainer>
                <TotalPriceContainer>
                    <p className="description">총 상품금액 : </p>
                    <p className="price">
                        {addCommaToNumber(quantity * props.price)}
                    </p>
                    <p className="unit">원</p>
                </TotalPriceContainer>
                <ProductAddChartContainer>
                    <Button width={430} height={55} fillColor>
                        장바구리 담기
                    </Button>
                </ProductAddChartContainer>
            </InfoContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1050px;
`;

const Thumbnail = styled.img`
    width: 430px;
    height: 550px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 560px;
`;

const ProductName = styled.h2`
    width: 500px;
    font-weight: 500;
    font-size: 24px;
    color: var(--black);
    line-height: 34px;
`;

const ProductEach = styled.p``;

const ProductPrice = styled.p`
    padding-right: 4px;
    font-size: 28px;
    color: #333;
`;

const ProductWeight = styled.p``;

const ProductOrigin = styled.p``;

const ProductDescribe = styled.p`
    padding-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #b5b5b5;
    line-height: 19px;
`;

const ProductDisCountRate = styled.p`
    padding-right: 9px;
    font-size: 28px;
    color: #fa622f;
`;

const ProductPackagingType = styled.p``;

const ProductBeforeDiscountPrice = styled.p`
    font-size: 16px;
    color: #b5b5b5;
    padding-top: 10px;
    text-decoration: line-through;
`;

const PriceContainer = styled.div`
    display: flex;
    font-weight: bold;
    line-height: 30px;
    margin-top: 20px;
`;

const Unit = styled.p`
    font-size: 18px;
    color: #333;
    transform: translateY(3px);
`;

const ItemContainer = styled.div`
    margin-top: 20px;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
`;

const ProductSeller = styled.p`
    color: #333;
    font-weight: 400;
`;

const Item = styled.div`
    display: flex;
    padding: 18px 0;
    color: rgb(102, 102, 102);
    font-size: 14px;
    font-weight: 400;

    & > :nth-of-type(1) {
        width: 130px;
    }
    & > :nth-of-type(2) {
        flex: 1;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #f4f4f4;
    }
`;

const ItemDescription = styled.p`
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding-top: 4px;
`;

const ProductSelectCount = styled.div`
    padding: 15px;
    border: 1px solid rgb(244, 244, 244);

    & p {
        color: var(--black);
        font-size: 12px;
        margin-bottom: 5px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    .beforSalePrice {
        text-decoration: line-through;
        margin-right: 5px;
    }

    .price {
        font-weight: bold;
    }
`;

const TotalPriceContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    margin-top: 30px;

    .description {
        padding-right: 12px;
        font-size: 13px;
        font-weight: 500;
        color: var(--black);
        line-height: 20px;
    }

    .price {
        font-weight: bold;
        font-size: 32px;
        color: var(--black);
        line-height: 36px;
        margin-right: 5px;
    }

    .unit {
        font-size: 20px;
        font-weight: 600;
        color: var(--black);
        line-height: 30px;
    }
`;

const ProductAddChartContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: end;
`;
