import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
            <PaymentInfo />
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
