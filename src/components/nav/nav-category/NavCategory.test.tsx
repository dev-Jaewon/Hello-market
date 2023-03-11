import { NavCategory } from "./NavCategory";
import { matchers } from "@emotion/jest";
import { renderWithProviders } from "../../../utils/test-utils";
import { fireEvent } from "@testing-library/react";
expect.extend(matchers);

describe("<NavCategory /> component", () => {
    const renderComponent = () => {
        const render = renderWithProviders(<NavCategory />);

        const icon = render.getByLabelText("icon");
        const categoryLabel = render.getByText("카테고리");
        const categoryList = render.queryByRole("categoryList");

        return { render, icon, categoryLabel, categoryList };
    };

    test("렌더링", () => {
        const { icon, categoryLabel, categoryList } = renderComponent();

        expect(icon).toBeInTheDocument();
        expect(categoryLabel).toBeInTheDocument();
        expect(categoryList).not.toBeInTheDocument();
    });

    test("마우스 hover , leave 경우 카테고리 리스트", async () => {
        const { render, categoryLabel } = renderComponent();

        fireEvent.mouseEnter(categoryLabel);

        const visibleCategoryList = render.queryByRole("categoryList");
        expect(visibleCategoryList).toBeInTheDocument();

        fireEvent.mouseLeave(categoryLabel);

        const hiddenCategoryList = render.queryByRole("categoryList");
        expect(hiddenCategoryList).not.toBeInTheDocument();
    });
});
