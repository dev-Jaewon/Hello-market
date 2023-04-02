import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { userInfoState } from "../../store/reducer/user";

export const OrderUserInfo = () => {
    const { name, phone, email } = useSelector(userInfoState);

    return (
        <Container>
            <OrderProductHeader>
                <h2>주문자 정보</h2>
            </OrderProductHeader>
            <InfoListContainer>
                <Item>
                    <div className="row-name">보내시는 분</div>
                    <div className="row-content">{name}</div>
                </Item>
                <Item>
                    <div className="row-name">휴대폰</div>
                    <div className="row-content">{phone}</div>
                </Item>
                <Item>
                    <div className="row-name">이메일</div>
                    <div className="email-warap">
                        <div className="row-content">{email}</div>
                        <p>이메일을 통해 주문처리과정을 보내드립니다.</p>
                    </div>
                </Item>
            </InfoListContainer>
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
`;

const InfoListContainer = styled.ul`
    border-top: 1px solid rgb(51, 51, 51);
    list-style: none;

    .email-warap {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: rgb(102, 102, 102);
    }
`;

const Item = styled.li`
    display: flex;
    padding: 10px 0;

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
