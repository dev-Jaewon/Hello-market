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

    const props = requireProps({ type: "text", placeholder: "테스트" });
    const handleChange = jest.fn();
    const user = userEvent.setup();

    test("<Input type='text'/> requirepProps입력 후 렌더링", () => {
        const renderInputComponent = renderInput(props());

        const input = renderInputComponent.getByRole("textbox");
        expect(input).toBeInTheDocument();
        expect(input).toHaveProperty("id", "");
        expect(input).toHaveProperty("name", "");
        expect(input).toHaveProperty("value", "");
        expect(input).toHaveProperty("type", "text");
        expect(input).toHaveProperty("placeholder", "테스트");

        const container = renderInputComponent.container.firstChild;
        expect(container).toHaveStyle("border: 1px solid rgb(221, 221, 221);");
    });

    test("onChange , value 테스트", () => {
        const input = renderInput(props({ onChange: handleChange })).getByRole(
            "textbox"
        );

        fireEvent.change(input, { target: { value: "테스트 인풋" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue("테스트 인풋");
    });

    test("click 했을 경우 focus 발생 체크", async () => {
        const renderInputComponent = renderInput(props());
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
});
