import { SearchBar } from "./SearchBar";
import { matchers } from "@emotion/jest";
import { renderWithProviders } from "../../../utils/test-utils";
import { fireEvent } from "@testing-library/react";
expect.extend(matchers);

describe("<SearchBar /> component", () => {
    const renderComponent = () => {
        const render = renderWithProviders(<SearchBar />);

        const eraserIcon = render.queryByRole("eraser");
        const magnifierIcon = render.getByRole("magnifier");
        const inputText = render.getByRole("textbox");

        return { render, eraserIcon, magnifierIcon, inputText };
    };

    test("렌더링 ", () => {
        const { eraserIcon, magnifierIcon, inputText } = renderComponent();

        expect(eraserIcon).not.toBeInTheDocument();
        expect(magnifierIcon).toBeInTheDocument();
        expect(inputText).toBeInTheDocument();
    });

    test("텍스트 입력 후 지우개 x 버튼 클릭", () => {
        const { inputText, render } = renderComponent();

        fireEvent.change(inputText, { target: { value: "테스트" } });
        expect(inputText).toHaveValue("테스트");
        expect(render.queryByRole("eraser")).toBeInTheDocument();

        fireEvent.click(render.queryByRole("eraser") as HTMLElement);
        expect(inputText).toHaveValue("");
    });
});
