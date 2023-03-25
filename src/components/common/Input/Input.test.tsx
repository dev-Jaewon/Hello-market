import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Input, InputProps } from "./Input";
import { matchers } from "@emotion/jest";
import userEvent from "@testing-library/user-event";
expect.extend(matchers);

describe("<Input /> component", () => {
    const renderInput = (props: InputProps) =>
        render(<Input id="s" {...props} />);

    const requireProps =
        (requireProps: GetRequiredType<InputProps>) =>
        (optionalProps: GetOptionalType<InputProps> = {}) => ({
            ...requireProps,
            ...optionalProps,
        });

    const typeTextRequirepProps = requireProps({
        type: "text",
        placeholder: "테스트",
    });
    const typePasswordRequirepProps = requireProps({
        type: "password",
        placeholder: "테스트",
    });
    const handleChange = jest.fn();
    const user = userEvent.setup();

    beforeEach(() => {
        handleChange.mockReset();
    });

    test("<Input type='text'/> requirepProps입력 후 렌더링", () => {
        const renderInputComponent = renderInput(
            typeTextRequirepProps({
                id: "input-id",
                value: "inputValue",
                onChange: handleChange,
            })
        );

        const input = renderInputComponent.getByRole("textbox");
        expect(input).toBeInTheDocument();
        expect(input).toHaveProperty("value", "inputValue");
        expect(input).toHaveProperty("type", "text");
        expect(input).toHaveProperty("placeholder", "테스트");
        expect(input).toHaveProperty("id", "input-id");

        const container = renderInputComponent.container.firstChild;
        expect(container).toHaveStyle("border: 1px solid rgb(221, 221, 221);");
    });

    test("type='text' => onChange , value 테스트", () => {
        const input = renderInput(
            typeTextRequirepProps({ onChange: handleChange })
        ).getByRole("textbox");

        fireEvent.change(input, { target: { value: "테스트 인풋" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue("테스트 인풋");
    });

    test("click 했을 경우 focus 발생 체크", async () => {
        const renderInputComponent = renderInput(typeTextRequirepProps());
        const input = renderInputComponent.getByRole("textbox");

        await user.click(input);
        expect(input).toHaveFocus();

        // fireEvent.click(input.parentElement as HTMLDivElement);
        // expect(input).toHaveFocus();

        // await user.click(input.parentElement as HTMLDivElement);

        // expect(input.parentElement).toHaveStyle(
        //     "border: 1px solid rgb(51, 51, 52);"
        // );

        // JSdom 이슈
        // github-issues: https://github.com/jsdom/jsdom/issues/3359
    });

    test("<Input type='password'/> requirepProps입력 후 렌더링", () => {
        const renderInputComponent = renderInput(
            typePasswordRequirepProps({
                id: "input-id",
                value: "inputValue",
                onChange: handleChange,
            })
        );

        const input = renderInputComponent.container.querySelector("#input-id");
        expect(input).toBeInTheDocument();
        expect(input).toHaveProperty("value", "inputValue");
        expect(input).toHaveProperty("type", "password");
        expect(input).toHaveProperty("placeholder", "테스트");
        expect(input).toHaveProperty("id", "input-id");

        const container = renderInputComponent.container.firstChild;
        expect(container).toHaveStyle("border: 1px solid rgb(221, 221, 221);");
    });

    test("type='password' => onChange , value 테스트", () => {
        const renderInputComponent = renderInput(
            typePasswordRequirepProps({
                id: "input-id",
                onChange: handleChange,
            })
        );

        const inputPassword = renderInputComponent.container.querySelector(
            "#input-id"
        ) as HTMLInputElement;

        fireEvent.change(inputPassword, { target: { value: "테스트 인풋" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(inputPassword).toHaveValue("테스트 인풋");
    });
});
