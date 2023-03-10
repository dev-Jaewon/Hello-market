import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

describe("<Button /> component", () => {
    const requireProps =
        (requireProps: GetRequiredType<ButtonProps>) =>
        (optionalProps: GetOptionalType<ButtonProps> = {}) => ({
            ...requireProps,
            ...optionalProps,
        });

    const props = requireProps({ children: "버튼", width: 300, height: 200 });

    const renderButton = (props: ButtonProps) => render(<Button {...props} />);

    const testRequireProps = (container: HTMLElement) => {
        expect(container).toHaveTextContent("버튼");
        expect(container).not.toBeDisabled();
        expect(container.firstChild).toHaveStyle(
            "width:300px;height:200px;border-radius: 4px"
        );
    };
    const handleClick = jest.fn();

    test("버튼 require Props 렌더링", () => {
        const { container } = renderButton(props());
        testRequireProps(container);
    });

    test("버튼 disabled", () => {
        const { container } = renderButton(props({ disabled: true }));
        testRequireProps(container);
        expect(container).toBeDisabled;
    });

    test("버튼 outline - true", () => {
        const { container } = renderButton(props({ outline: true }));
        testRequireProps(container);
        expect(container).toHaveStyle("border: 1px solid var(--brand)");
    });

    test("버튼 outline - false", () => {
        const { container } = renderButton(props({ outline: false }));
        testRequireProps(container);
        expect(container).toHaveStyle("border: none");
    });

    test("버튼 fill(색 채우기) - true", () => {
        const { container } = renderButton(props({ fillColor: true }));
        testRequireProps(container);
        expect(container).toHaveStyle("background: var(--brand)");
    });

    test("버튼 fill(색 채우기) - false", () => {
        const { container } = renderButton(props({ fillColor: false }));
        testRequireProps(container);
        expect(container).toHaveStyle("background: unset");
    });

    test("버튼 onclick 이벤트 발생 체크", () => {
        const button = renderButton(props({ onClick: handleClick })).getByRole(
            "button"
        );

        fireEvent.click(button);
        expect(handleClick).toBeCalledTimes(1);
    });
});
