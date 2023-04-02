import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartList } from "../components/cartList/CartList";
import { PaymentInfo } from "../components/paymentInfo/PaymentInfo";
import { AppDispatch } from "../store";
import { getCartList } from "../store/actions/cart";
import { cartState } from "../store/reducer/cart";

export const Cart = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { list } = useSelector(cartState);

    const handleNextRoute = () => {
        router.push("/order");
    };

    useEffect(() => {
        if (!list.length) dispatch(getCartList());
    });

    return (
        <Container>
            <h1>장바구니</h1>
            <ContentsWrap>
                <CartList />
                <DeliveryController>
                    <PaymentInfo orderButtonAction={handleNextRoute} />
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
    padding-top: 35px;
`;
