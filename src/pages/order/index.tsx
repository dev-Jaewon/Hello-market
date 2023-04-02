import styled from "@emotion/styled";
import { OrderUserInfo } from "../../components/orderUserInfo/OrderUserInfo";
import { OrderProduct } from "../../components/orderProduct/OrderProduct";
import { OrderDeliveryinfo } from "../../components/orderDeliveryInfo/OrderDeliveryInfo";
import { OrderPayment } from "../../components/orderPayment/orderPayment";
import { PaymentInfo } from "../../components/paymentInfo/PaymentInfo";
import { postPayment } from "../../utils/api";
import { useSelector } from "react-redux";
import { cartState } from "../../store/reducer/cart";
import { getPropertyInArray } from "../../utils/utils";
import { PaymentReady } from "../../types/payment";

export const Order = () => {
    const { list } = useSelector(cartState);

    const handlePaymentActionClick = async () => {
        const orderProduct = list.filter((product) => product.checked);

        const getProperylist = ["name", "quantity", "price"];
        const requestData = getPropertyInArray<PaymentReady>(
            orderProduct,
            getProperylist
        );

        const res = await postPayment(requestData);
        localStorage.setItem("user-tid", res.data.tid);
        document.location.href = `${res.data.next_redirect_pc_url}`;
    };

    return (
        <Container>
            <OrderProduct />
            <DeliveryContainer>
                <InfoContainer>
                    <OrderUserInfo />
                    <OrderDeliveryinfo />
                    <OrderPayment />
                </InfoContainer>
                <PaymentContainer>
                    <h3>결제 금액</h3>
                    <PaymentInfo orderButtonAction={handlePaymentActionClick} />
                </PaymentContainer>
            </DeliveryContainer>
        </Container>
    );
};

export default Order;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    width: 100%;
    gap: 60px;
`;

const DeliveryContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 1050px;
`;

const InfoContainer = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

const PaymentContainer = styled.div`
    position: sticky;
    top: 70px;
    height: fit-content;

    h3 {
        font-weight: 500;
        font-size: 20px;
        color: var(--black);
        padding-bottom: 20px;
    }
`;
