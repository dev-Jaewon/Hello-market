import styled from "@emotion/styled";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ORDER_NOTIFIE_CATION } from "../../constance";
import { cartState } from "../../store/reducer/cart";
import { addCommaToNumber } from "../../utils/utils";
import { Button } from "../common/Button/Button";

export const PaymentInfo = () => {
    const { list } = useSelector(cartState);

    const prices = useMemo(() => {
        return list.length
            ? list.reduce(
                  (
                      prices,
                      { quantity, beforeDiscountPrice, price, checked }
                  ) => {
                      if (!checked) return prices;

                      prices["paymentAmount"] += price * quantity;

                      prices["productPrice"] += beforeDiscountPrice * quantity;

                      prices["salePrice"] +=
                          (beforeDiscountPrice - price) * quantity;

                      return prices;
                  },
                  { productPrice: 0, salePrice: 0, paymentAmount: 0 }
              )
            : { productPrice: 0, salePrice: 0, paymentAmount: 0 };
    }, [list]);

    return (
        <Container>
            <InfoContainer>
                <ItemPrice>
                    <ItemName>상품금액</ItemName>
                    <span aria-label="상품금액">
                        {addCommaToNumber(prices.productPrice)}
                    </span>
                </ItemPrice>

                <ItemPrice>
                    <ItemName>상품할인금액</ItemName>
                    <span aria-label="할인금액">
                        {addCommaToNumber(prices.salePrice)}
                    </span>
                </ItemPrice>
                <ItemPrice>
                    <ItemName>배송비</ItemName>
                    <p>무료배송</p>
                </ItemPrice>
                <ItemPrice>
                    <ItemName>결제예정금액</ItemName>
                    <h2 aria-label="걸제예정금액">
                        {addCommaToNumber(prices.paymentAmount)}
                    </h2>
                </ItemPrice>
            </InfoContainer>
            <Link href={"/order"}>
                <Button width={285} height={55} fillColor>
                    주문하기
                </Button>
            </Link>
            <OrderNotification>
                {ORDER_NOTIFIE_CATION.map((content, i) => (
                    <p key={i}>{content}</p>
                ))}
            </OrderNotification>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 285px;
    height: fit-content;
    padding: 20px;
    border: 1px solid #f2f2f2;
    background-color: #fafafa;
    gap: 15px;

    span {
        display: flex;
        position: relative;
        font-size: 18px;
        gap: 5px;

        &:after {
            position: relative;
            content: "원";
        }
    }

    h2 {
        display: flex;
        gap: 5px;

        &:after {
            position: relative;
            content: "원";
        }
    }
`;

const ItemPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
        position: relative;
        margin-top: 10px;

        :after {
            content: "";
            position: absolute;
            top: -10px;
            width: 100%;
            height: 1px;
            border-top: 1px solid #f4f4f4;
        }
    }
`;

const ItemName = styled.div`
    width: 100px;
    font-size: 16px;
    white-space: nowrap;
`;

const OrderNotification = styled.div`
    font-size: 12px;

    p {
        color: rgb(102, 102, 102);

        &:not(:first-of-type) {
            padding-top: 4px;
        }
    }
`;
