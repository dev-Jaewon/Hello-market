import styled from "@emotion/styled";

export const Footer = () => {
    return (
        <>
            <Container>
                <BusinessHourInfoContainer>
                    <h1>고객행복센터</h1>
                    <div className="tell-wrap">
                        <p>1234-4567</p>
                        <span>월~토요일 오전 7시 - 오후 6시</span>
                    </div>
                </BusinessHourInfoContainer>
                <BusinessInfo>
                    <div>
                        <p>법인명 (상호) : 주식회사 테스트 </p>
                        <p> 사업자등록번호 : 123-45-6789</p>
                        <p>사업자정보 확인</p>
                    </div>
                    <div>
                        <p>통신판매업 : 제 1234-지구-5678 호 </p>
                        <p> 개인정보보호책임자 : 테스트맨</p>
                    </div>
                    <div>
                        <p>
                            주소 : 서울특별시 강남구 지상 어딘가 위치하고 있음
                        </p>
                        <p> 대표이사 : 장테스트맨</p>
                    </div>
                    <div>
                        <p>입점 문의 : 입점 문의하기</p>
                        <p>제휴문의 : test@asdfjkl.com</p>
                    </div>
                    <div>
                        <p>팩스 : 010-1234-5678</p>
                    </div>
                </BusinessInfo>
            </Container>
            <Notification>
                <p>
                    여기서 판매되는 상품 중에서는 랜덤으로 입점한 개별 판매자가
                    판매한는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
                </p>
                <p>
                    마켓플레이스(오픈마켓) 상품의 경우 헬로우마켓은는
                    통신판매중개자로서 통신판매의 당사자가 아닙니다.
                    헬로우마켓은 해당 상품의 주문, 품질, 교환/환불 등 의무와
                    책임을 부담하지 않습니다.
                </p>
            </Notification>
        </>
    );
};

const Container = styled.footer`
    left: 50%;
    margin: 80px 0 50px;
    position: relative;
    transform: translate(-50%, 10px);

    display: flex;
    width: 1050px;
    justify-content: space-between;
`;

const BusinessHourInfoContainer = styled.div`
    padding-bottom: 17px;
    font-weight: 500;
    font-size: 20px;

    .tell-wrap {
        display: flex;
        align-items: center;

        p {
            font-size: 28px;
            font-weight: 700;
        }

        span {
            margin-left: 8px;
            font-weight: normal;
            font-size: 16px;
        }
    }
`;

const BusinessInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgb(153, 153, 153);
    margin-bottom: 40px;

    div {
        display: flex;

        p {
            display: flex;

            &:not(:first-child) {
                position: relative;
                margin-left: 5px;

                &:before {
                    margin-right: 5px;
                    content: "|";
                }
            }
        }
    }
`;

const Notification = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: rgb(247, 247, 247);
    color: rgb(153, 153, 153);
    font-size: 10px;
    text-align: center;
`;
