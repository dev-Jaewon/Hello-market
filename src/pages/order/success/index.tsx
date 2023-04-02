import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../../components/common/Button/Button";
import { paymentState } from "../../../store/reducer/payment";
import { addCommaToNumber } from "../../../utils/utils";

export const Success = () => {
    const { query } = useRouter();
    const { orderId } = useSelector(paymentState);

    useEffect(() => {
        const { orderId } = query;

        if (!orderId) return;
    }, [query]);

    if (!orderId) return <div>123</div>;

    return (
        <Container>
            <OrderSuccessHeader>
                <h2>주문완료</h2>
            </OrderSuccessHeader>
            <ContentContainer>
                <h2>주문이 완료 되었습니다.</h2>
                <OrderInfoContainer>
                    <InfoContainer>
                        <h3>받는사람 정보</h3>
                        <Info>
                            <div className="row-header">받는사람</div>
                            <div className="row-content">장재원</div>
                        </Info>
                        <Info>
                            <div className="row-header">받는주소</div>
                            <div className="row-content">서울시</div>
                        </Info>
                        <Info>
                            <div className="row-header">요청사항</div>
                            <div className="row-content">서울시</div>
                        </Info>
                    </InfoContainer>
                    <InfoContainer>
                        <h3>결제 정보</h3>
                        <Payment>
                            <div className="row-header">주문금액</div>
                            <div className="row-content">서울시</div>
                        </Payment>
                        <Payment>
                            <div className="row-header">배송비</div>
                            <div className="row-content">0</div>
                        </Payment>
                        <AmountPayment>
                            <div className="row-header">총 결제 금액</div>
                            <div className="row-content">
                                {addCommaToNumber(10000)}원
                            </div>
                        </AmountPayment>
                    </InfoContainer>
                </OrderInfoContainer>
            </ContentContainer>
            <LinkHome href={"/"}>
                <Button width={400} height={60} fillColor>
                    돌아가기
                </Button>
            </LinkHome>
        </Container>
    );
};

export default Success;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    width: 100%;
`;

const OrderSuccessHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(51, 51, 51);
    width: 1050px;
`;

const ContentContainer = styled.div`
    display: flex;
    padding-bottom: 50px;
    flex-direction: column;
    width: 1050px;
    border-bottom: 1px solid var(--black);

    & > h2 {
        padding: 50px 0;
        text-align: center;
    }
`;

const OrderInfoContainer = styled.div`
    display: flex;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;

    & > h3 {
        padding: 30px 0;
    }
`;

const Info = styled.div`
    display: flex;
    padding: 5px 0;

    .row-header {
        width: 150px;
    }

    .row-content {
        flex: 1 1;
        font-weight: 600;
    }
`;

const Payment = styled.div`
    display: flex;
    padding: 5px 0;

    .row-header {
        width: 150px;
    }

    .row-content {
        flex: 1 1;
        font-weight: 600;
        text-align: right;
    }
`;

const AmountPayment = styled.div`
    display: flex;
    padding: 10px 0;
    border-top: 1px solid #f4f4f4;

    .row-header {
        font-size: 20px;
        font-weight: 700;
        width: 150px;
    }

    .row-content {
        flex: 1 1;
        font-weight: 600;
        font-size: 20px;
        text-align: right;
        color: rgb(161, 1, 1);
    }
`;

const LinkHome = styled(Link)`
    margin-top: 50px;

    button {
        font-size: 20px;
    }
`;
