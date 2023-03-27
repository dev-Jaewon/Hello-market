import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CartList } from "../components/cartList/CartList";
import { PaymentInfo } from "../components/paymentInfo/PaymentInfo";
import { AppDispatch } from "../store";
import { getCartList } from "../store/actions/cart";

export const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCartList());
    });

    return (
        <Container>
            <h1>장바구니</h1>
            <ContentsWrap>
                <CartList />
                <DeliveryController>
                    <PaymentInfo />
                </DeliveryController>
            </ContentsWrap>
        </Container>
    );
};

export default Cart;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        padding: 50px 0;
    }
`;

const ContentsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1050px;
`;

const DeliveryController = styled.div`
    display: flex;
    flex-direction: column;
`;
