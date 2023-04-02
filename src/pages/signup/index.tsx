import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { Input } from "../../components/common/Input/Input";
import { Button } from "../../components/common/Button/Button";
import { setOpenModal, setContent } from "../../store/reducer/modal";
import { useForm } from "../../hooks/useForm";
import { validations } from "../../constance";
import { postCheckInfo, postSignup } from "../../utils/api";
import { useRouter } from "next/router";

export const Signup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState("");
    const { data, handleChange, errors } = useForm({
        validations,
        onSubmit: () => alert("User submitted!"),
        initialValues: {
            id: "",
            password: "",
            passwordRe: "",
            name: "",
            email: "",
            phone: "",
        },
    });

    const handleDuplicateIdCheckClick = async (
        e: MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        if (errors.id) return viewModal("사용할 수 없는 아이디 입니다.");

        try {
            const res = await postCheckInfo({ id: data.id });
            let content = res.data.result
                ? "사용 할 수 있는 아이디 입니다"
                : "사용 불가능한 아이디 입니다";

            viewModal(content);
        } catch (error: any) {
            controlError(error);
        }
    };

    const handleDuplicateEmailCheckClick = async (
        e: MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();

        if (errors.email) return viewModal("사용할 수 없는 이메일입니다.");

        try {
            const res = await postCheckInfo({ email: data.email });
            let content = res.data.result
                ? "사용 가능한 이메일 입니다"
                : "사용 불가능한 이메일 입니다";

            viewModal(content);
        } catch (error: any) {
            controlError(error);
        }
    };

    const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        handleChange<string>("phone")(e);
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(errors).length) {
            viewModal("필수 정보를 다시한번 확인해주세요");
            return;
        }

        try {
            await postSignup(data);
            router.push("/signup/complete");
        } catch (error: any) {
            viewModal(error?.response.data.message);
        }
    };

    const controlError = (error: any) => {
        if (error?.response?.status === 400) {
            viewModal(error?.response.data.message);
        } else {
            viewModal("서버에 문제가 발생하였습니다");
        }
    };

    const viewModal = (value: string) => {
        dispatch(setOpenModal("notified"));
        dispatch(setContent(value));
    };

    return (
        <ComponentContainer>
            <form onSubmit={handleSubmit}>
                <h1>회원가입</h1>
                <Fence>
                    <div>필수입력사항</div>
                </Fence>
                <ItemContainer>
                    <RequireText>아이디</RequireText>
                    <div>
                        <Input
                            type="text"
                            placeholder="아이디"
                            id="input-id"
                            value={data.id || ""}
                            onChange={(e) => handleChange<string>("id")(e)}
                        />
                    </div>
                    <Button
                        outline
                        width={120}
                        height={44}
                        onClick={handleDuplicateIdCheckClick}
                    >
                        ID중복확인
                    </Button>
                </ItemContainer>
                {errors.id && (
                    <ErrorMessage aria-label="Id Error Message">
                        {errors.id}
                    </ErrorMessage>
                )}
                <ItemContainer>
                    <RequireText>비밀번호</RequireText>
                    <div>
                        <Input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            id="input-pwd"
                            value={data.password || ""}
                            onChange={(e) =>
                                handleChange<string>("password")(e)
                            }
                        />
                    </div>
                </ItemContainer>
                {errors.password && (
                    <ErrorMessage aria-label="password Error Message">
                        {errors.password}
                    </ErrorMessage>
                )}
                <ItemContainer>
                    <RequireText>비밀번호 확인</RequireText>
                    <div>
                        <Input
                            type="password"
                            placeholder="비밀번호를 한번 더 입력해주세요"
                            id="input-pwd-re"
                            value={data.passwordRe || ""}
                            onChange={(e) =>
                                handleChange<string>("passwordRe")(e)
                            }
                        />
                    </div>
                </ItemContainer>
                {data.passwordRe && data.passwordRe !== data.password && (
                    <ErrorMessage aria-label="Re-enter password Error Message">
                        동일한 비밀번호를 입력
                    </ErrorMessage>
                )}
                <ItemContainer>
                    <RequireText>이름</RequireText>
                    <div>
                        <Input
                            type="text"
                            placeholder="이름을 입력해 주세요"
                            id="input-name"
                            value={data.name || ""}
                            onChange={(e) => handleChange<string>("name")(e)}
                        />
                    </div>
                </ItemContainer>
                {errors.name && (
                    <ErrorMessage aria-label="name Error Message">
                        {errors.name}
                    </ErrorMessage>
                )}
                <ItemContainer>
                    <RequireText>이메일</RequireText>
                    <div>
                        <Input
                            type="text"
                            placeholder="예:app235@naver.com"
                            id="input-email"
                            value={data.email || ""}
                            onChange={(e) => handleChange<string>("email")(e)}
                        />
                    </div>
                    <Button
                        outline
                        width={120}
                        height={44}
                        onClick={handleDuplicateEmailCheckClick}
                    >
                        Email중복확인
                    </Button>
                </ItemContainer>
                {errors.email && (
                    <ErrorMessage aria-label="email Error Message">
                        {errors.email}
                    </ErrorMessage>
                )}
                <ItemContainer>
                    <RequireText>휴대폰</RequireText>
                    <div>
                        <Input
                            type="text"
                            placeholder="숫자만 입력해주세요."
                            onChange={handleChangePhoneNumber}
                            value={data.phone || ""}
                            id="input-phone"
                        />
                    </div>
                    {/* <Button
                        outline
                        width={120}
                        height={44}
                        onClick={() => {}}
                        disabled={!phoneNumber}
                    >
                        인증번호 받기
                    </Button> */}
                </ItemContainer>
                {errors.phone && (
                    <ErrorMessage aria-label="phone Error Message">
                        {errors.phone}
                    </ErrorMessage>
                )}
                <Fence></Fence>
                <SubmitButton>
                    <Button width={240} height={56} outline fillColor>
                        가입하기
                    </Button>
                </SubmitButton>
            </form>
        </ComponentContainer>
    );
};

export default Signup;

const ComponentContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;

    h1 {
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 50px;
        text-align: center;
    }

    form {
        width: 100%;
        max-width: 640px;
    }
`;

const Fence = styled.div`
    height: fit-content;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(51, 51, 51);
    font-size: 12px;
    color: rgb(102, 102, 102);
    line-height: 17px;
    text-align: right;

    & > div {
        &:after {
            content: "*";
            color: red;
            width: 1px;
            height: auto;
        }
    }
`;

const ItemContainer = styled.div`
    padding: 10px 20px;
    display: flex;
    min-height: 44px;

    & > div {
        flex: 1;
        display: flex;
        width: 100%;
        max-width: 333px;
        margin-right: 10px;
    }
`;

const ErrorMessage = styled.p`
    margin: 0;
    padding-left: 160px;
    font-size: 13px;
    color: rgb(240, 63, 64);
`;

const RequireText = styled.label`
    display: flex;
    align-items: center;
    width: 140px;
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);

    &:after {
        content: "*";
        color: red;
        width: 1px;
        height: auto;
    }
`;

const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    color: white !important;
`;
