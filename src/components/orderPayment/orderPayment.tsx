import styled from "@emotion/styled";
import { SiKakao } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { setPayment, userInfoState } from "../../store/reducer/user";

export const OrderPayment = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { payment } = useSelector(userInfoState);

    const handlePaymentClick = (payment: string) => {
        dispatch(setPayment(payment));
    };

    return (
        <Container>
            <OrderProductHeader>
                <h2>결제 수단</h2>
            </OrderProductHeader>
            <PaymentConatiner>
                <Item>
                    <div className="row-name">결제수단 선택</div>
                    <div className="row-content">
                        <KakaoPaymentButton
                            aria-label="카카오결제버튼"
                            onClick={() => handlePaymentClick("kakao")}
                            payment={payment}
                        ></KakaoPaymentButton>
                        <PaymentDescription>
                            <h4>카카오페이</h4>
                            <p>1만원 이상 결제 시 1천원 즉시할인</p>
                            <p>친구에게 알려주면 1 + 1</p>
                            <p>
                                2333 / 3/27 00시 ~ 3/31 23시 59분, 기간 내 ID당
                                1회 선착순
                            </p>
                        </PaymentDescription>
                    </div>
                </Item>
            </PaymentConatiner>
            <PaymentNotipication>
                <p>
                    ※ 카카오페이 결제 시, 결제하신 수단으로만 환불되는 점
                    양해부탁드립니다.
                </p>
                <p>
                    ※ 고객님은 테스트거래를 위해 현금 등으로 결제시 저희 테스트
                    헬로우몰에서 가입한 헬로우 페이먼츠의 테스트안전 서비스를
                    이용하실 수 있습니다.
                </p>
            </PaymentNotipication>
        </Container>
    );
};

const Container = styled.section`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    user-select: none;
`;

const OrderProductHeader = styled.div`
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(51, 51, 51);
`;

const PaymentConatiner = styled.div``;

const Item = styled.li`
    display: flex;
    padding: 20px 0;

    .row-name {
        width: 160px;
        margin-right: 30px;
        font-weight: 500;
        font-size: 14px;
        color: var(--black);
    }

    .row-content {
        flex: 1 1;
        font-size: 14px;
        line-height: 24px;
    }
`;

const KakaoPaymentButton = styled(SiKakao)<{ payment: string }>`
    width: 415px;
    height: 50px;
    border: ${({ payment }) =>
        payment !== "kakao" ? "1px solid rgb(226, 226, 226)" : "none"};
    background-color: ${({ payment }) => payment === "kakao" && "yellow"};
    border-radius: 4px;
    cursor: pointer;
`;

const PaymentDescription = styled.div`
    font-size: 12px;
    color: rgb(102, 102, 102);
`;

const PaymentNotipication = styled.div`
    border-top: 1px solid rgb(244, 244, 244);
    padding-top: 20px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(102, 102, 102);
`;
