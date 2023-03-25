import { fireEvent } from "@testing-library/react";
import { Signup } from "./signup";
import { matchers } from "@emotion/jest";
import { renderWithProviders } from "../utils/test-utils";
import axios from "axios";
expect.extend(matchers);

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderSignup = () => {
    const render = renderWithProviders(<Signup />);

    // input
    const InputId = render.container.querySelector(
        "#input-id"
    ) as HTMLInputElement;
    const InputPassword = render.container.querySelector(
        "#input-pwd"
    ) as HTMLInputElement;
    const InputPasswordRe = render.container.querySelector(
        "#input-pwd-re"
    ) as HTMLInputElement;
    const InputName = render.container.querySelector(
        "#input-name"
    ) as HTMLInputElement;
    const InputEmail = render.container.querySelector(
        "#input-email"
    ) as HTMLInputElement;
    const InputPhone = render.container.querySelector(
        "#input-phone"
    ) as HTMLInputElement;

    const SignupButton = render.getByText("가입하기");
    const IdDuplicateCheckButton = render.getByText("ID중복확인");
    const EmailDuplicateCheckButton = render.getByText("Email중복확인");
    const AuthPhoneNumberButton = render.getByText("인증번호 받기");

    return {
        InputId,
        InputPassword,
        InputPasswordRe,
        InputName,
        InputEmail,
        SignupButton,
        InputPhone,
        AuthPhoneNumberButton,
        IdDuplicateCheckButton,
        EmailDuplicateCheckButton,
        render,
    };
};

describe("회원가입 페이지", () => {
    test("페이지 렌더링", () => {
        const {
            InputId,
            InputPassword,
            InputPasswordRe,
            InputName,
            InputEmail,
            InputPhone,
            SignupButton,
            AuthPhoneNumberButton,
            IdDuplicateCheckButton,
            EmailDuplicateCheckButton,
        } = renderSignup();

        expect(InputId).toBeInTheDocument();
        expect(InputPassword).toBeInTheDocument();
        expect(InputPasswordRe).toBeInTheDocument();
        expect(InputName).toBeInTheDocument();
        expect(InputEmail).toBeInTheDocument();
        expect(SignupButton).toBeInTheDocument();
        expect(InputPhone).toBeInTheDocument();
        expect(AuthPhoneNumberButton).toBeInTheDocument();
        expect(IdDuplicateCheckButton).toBeInTheDocument();
        expect(EmailDuplicateCheckButton).toBeInTheDocument();
    });

    test("<button>아이디 중복확인</button> 클릭 중복 x", async () => {
        const { IdDuplicateCheckButton, render } = renderSignup();
        mockedAxios.post.mockResolvedValue({ data: { result: true } });

        await fireEvent.click(IdDuplicateCheckButton);
        expect(render.store.getState().modalState).toEqual({
            type: "notified",
            content: "사용 할 수 있는 아이디 입니다",
        });
    });

    test("<button>아이디 중복확인</button> 클릭 중복 o", async () => {
        const { IdDuplicateCheckButton, render } = renderSignup();

        mockedAxios.post.mockResolvedValue({ data: { result: false } });
        await fireEvent.click(IdDuplicateCheckButton);
        expect(render.store.getState().modalState).toEqual({
            type: "notified",
            content: "사용 불가능한 아이디 입니다",
        });
    });

    test("<button>이메일 중복확인</button> 클릭 중복 x", async () => {
        const { EmailDuplicateCheckButton, render } = renderSignup();

        mockedAxios.post.mockResolvedValue({ data: { result: true } });
        await fireEvent.click(EmailDuplicateCheckButton);
        expect(render.store.getState().modalState).toEqual({
            type: "notified",
            content: "사용 가능한 이메일 입니다",
        });
    });

    test("<button>이메일 중복확인</button> 클릭 중복 o", async () => {
        const { EmailDuplicateCheckButton, render } = renderSignup();

        mockedAxios.post.mockResolvedValue({ data: { result: false } });
        await fireEvent.click(EmailDuplicateCheckButton);
        expect(render.store.getState().modalState).toEqual({
            type: "notified",
            content: "사용 불가능한 이메일 입니다",
        });
    });

    test("<button>인증번호받기</button> input 데이터에 따른 Disabled 속성", async () => {
        const { InputPhone, AuthPhoneNumberButton } = renderSignup();

        expect(InputPhone).toHaveValue("");
        expect(AuthPhoneNumberButton).toBeDisabled();

        fireEvent.change(InputPhone, { target: { value: "01012341234" } });
        expect(AuthPhoneNumberButton).not.toBeDisabled();
        expect(InputPhone).toHaveValue("01012341234");
    });

    test("아이디 유효성 검사 에러메세지 노출", () => {
        const { InputId, render } = renderSignup();

        fireEvent.change(InputId, { target: { value: "test1234" } });
        expect(render.queryByLabelText("Id Error Message")).toEqual(null);
        fireEvent.change(InputId, { target: { value: "abc" } });
        expect(render.getByLabelText("Id Error Message")).toBeInTheDocument();
        fireEvent.change(InputId, { target: { value: "abcasdf3123#@" } });
        expect(render.getByLabelText("Id Error Message")).toBeInTheDocument();
    });

    test("비밀번호 유효성 검사 에러메세지 노출", () => {
        const { InputPassword, render } = renderSignup();

        fireEvent.change(InputPassword, { target: { value: "asdf123" } });
        expect(
            render.getByLabelText("password Error Message")
        ).toHaveTextContent("최소 10자 이상 입력");

        fireEvent.change(InputPassword, { target: { value: "123456" } });
        expect(
            render.getByLabelText("password Error Message")
        ).toHaveTextContent(
            "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
        );
    });

    test("비밀번호 재입력 유효성 검사 에러메세지 노출", () => {
        const { InputPassword, InputPasswordRe, render } = renderSignup();

        fireEvent.change(InputPassword, { target: { value: "1234test" } });
        fireEvent.change(InputPasswordRe, { target: { value: "1234test" } });
        expect(
            render.queryByLabelText("Re-enter password Error Message")
        ).toEqual(null);

        fireEvent.change(InputPassword, { target: { value: "1234test" } });
        fireEvent.change(InputPasswordRe, { target: { value: "6789test" } });

        expect(
            render.getByLabelText("Re-enter password Error Message")
        ).toBeInTheDocument();
    });

    test("이름입력 유효성 검사 에러메세지 노출", () => {
        const { InputName, render } = renderSignup();

        fireEvent.change(InputName, { target: { value: "테스트" } });
        expect(render.queryByLabelText("name Error Message")).toEqual(null);
        fireEvent.change(InputName, { target: { value: "123" } });
        expect(render.getByLabelText("name Error Message")).toBeInTheDocument();
        fireEvent.change(InputName, { target: { value: "테스트123" } });
        expect(render.getByLabelText("name Error Message")).toBeInTheDocument();
    });

    test("이메일입력 유효성 검사 에러메세지 노출", () => {
        const { InputEmail, render } = renderSignup();

        fireEvent.change(InputEmail, { target: { value: "test@gmail.com" } });
        expect(render.queryByLabelText("email Error Message")).toEqual(null);

        fireEvent.change(InputEmail, { target: { value: "test.tst.test" } });
        expect(
            render.getByLabelText("email Error Message")
        ).toBeInTheDocument();
    });

    test("핸드폰번호 유효성 검사 에러메세지 노출", async () => {
        const { InputPhone, render } = renderSignup();

        fireEvent.change(InputPhone, { target: { value: "01012345678" } });
        expect(render.queryByLabelText("phone Error Message")).toEqual(null);

        fireEvent.change(InputPhone, { target: { value: "010asdf" } });
        expect(
            render.queryByLabelText("phone Error Message")
        ).toBeInTheDocument();
    });
});
