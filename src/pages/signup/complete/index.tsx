import styled from "@emotion/styled";
import { Button } from "../../../components/common/Button/Button";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";

const SigninComplete = () => {
    return (
        <Container>
            <ContentContainer>
                <IconWrap>
                    <BsCheckLg size={200} color={"var(--brand)"} />
                </IconWrap>
                <div className="completion">
                    회원가입이 <span>완료</span> 되었습니다.
                </div>
                <div>
                    <p>저렴한 상품을 나의 카트에 담아보세요.</p>
                    <p>헬로우 마켓에서는 다양한 상품이 준비되었습니다.</p>
                </div>
            </ContentContainer>
            <ButtonContainer>
                <Link href={"/"}>
                    <Button width={300} height={60} outline>
                        홈으로
                    </Button>
                </Link>
                <Link href={"/signin"}>
                    <Button width={300} height={60} fillColor>
                        로그인
                    </Button>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export default SigninComplete;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`;

const IconWrap = styled.div``;

const ButtonContainer = styled.div`
    border-top: 1px solid #c9c6c6;
    padding-top: 40px;
    display: flex;
    gap: 20px;
`;

const ContentContainer = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .completion {
        font-size: 30px;
    }

    div {
        width: 100%;
        text-align: center;
        padding: 40px 0;
    }
`;
