import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Address, userInfoState } from "../../store/reducer/user";

export const OrderDeliveryinfo = () => {
    const { address } = useSelector(userInfoState);

    const selected = (address as Array<Address>).find((item) => item.selected);

    return (
        <Container>
            <OrderProductHeader>
                <h2>배송 정보</h2>
            </OrderProductHeader>
            <InfoContainer>
                <Item>
                    <div className="row-name">배송지</div>
                    <div className="row-content">
                        {selected?.default && <div>기본 배송지</div>}
                        <div>{selected?.value}</div>
                    </div>
                </Item>
                <Item>
                    <div className="row-name">상세 정보</div>
                    <div className="row-content">
                        <div className="receiver-user">{`${selected?.receiver}, ${selected?.phoneNumber}`}</div>
                        <div className="receiver-place">{`${selected?.placeToPut} | ${selected?.doorPassword}`}</div>
                    </div>
                </Item>
            </InfoContainer>
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
    justify-content: space-between;
    padding-bottom: 15px;
`;

const InfoContainer = styled.ul`
    border-top: 1px solid rgb(51, 51, 51);
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

        .receiver-place {
            color: rgb(102, 102, 102);
        }
    }
`;
