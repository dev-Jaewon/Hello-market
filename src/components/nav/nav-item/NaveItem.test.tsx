import { ItemPropsType, NavItem } from "./NavItem";
import { matchers } from "@emotion/jest";
import { renderWithProviders } from "../../../utils/test-utils";
expect.extend(matchers);

describe("<NavItem /> component", () => {
    const initProps = { value: "메뉴", path: "/" };

    const renderComponent = (props: ItemPropsType) => {
        const render = renderWithProviders(<NavItem {...props} />);

        const menuItem = render.getByRole("listitem");
        return { render, menuItem };
    };

    test("렌더링", () => {
        const { menuItem } = renderComponent(initProps);

        expect(menuItem).toBeInTheDocument();
    });

    test("현재 페이지 일 경우 스타일", async () => {
        const { menuItem } = renderComponent({ ...initProps, current: true });

        expect(menuItem).toHaveStyleRule("color", "var(--brand)");
    });
});
