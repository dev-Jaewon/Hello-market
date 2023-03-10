import { render } from "@testing-library/react";
import { Signup } from "./signup";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

const renderSignup = () => {
    const SingupComponent = render(<Signup />);
    const container = SingupComponent.container;

    // input
    const InputId = container.querySelector("#input-id");
    const InputPassword = container.querySelector("#input-pwd");
    const InputPasswordRe = container.querySelector("#input-pwd");
    const InputName = container.querySelector("#input-name");
    const InputEmail = container.querySelector("#input-email");

    // button
    const SignupButton = SingupComponent.getByRole("button", {
        name: "가입하기",
    });

    return {
        InputId,
        InputPassword,
        InputPasswordRe,
        InputName,
        InputEmail,
        SignupButton,
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
            SignupButton,
        } = renderSignup();

        expect(InputId).toBeInTheDocument();
        expect(InputPassword).toBeInTheDocument();
        expect(InputPasswordRe).toBeInTheDocument();
        expect(InputName).toBeInTheDocument();
        expect(InputEmail).toBeInTheDocument();
        expect(SignupButton).toBeInTheDocument();
    });
});
