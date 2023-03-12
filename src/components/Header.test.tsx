import { Header } from "./Header";
import { matchers } from "@emotion/jest";
import { renderWithProviders } from "../utils/test-utils";
import { MENUS } from "../constance";

expect.extend(matchers);

describe("<Header /> component", () => {
    const renderComponent = () => {
        const render = renderWithProviders(<Header />);

        const logoIcon = render.getByAltText("logo image");
        const menuList = render.getByRole("menuList");
        const signupButton = render.getByText("회원가입");
        const signinButton = render.getByText("로그인");
        const categoryList = render.queryByRole("categoryList");
        const cartIcon = render.container.querySelector(".cart");

        return {
            render,
            logoIcon,
            cartIcon,
            menuList,
            signupButton,
            signinButton,
            categoryList,
        };
    };

    test("렌더링", () => {
        const { logoIcon, menuList, signupButton, signinButton, categoryList } =
            renderComponent();

        expect(menuList.children.length).toBe(MENUS.length);
        expect(logoIcon).toBeInTheDocument();
        expect(signupButton).toBeInTheDocument();
        expect(signinButton).toBeInTheDocument();
        expect(categoryList).not.toBeInTheDocument();
    });

    test("element 클릭시 페이지 이동", () => {
        const { logoIcon, cartIcon, signupButton, signinButton } =
            renderComponent();
        const path = ["/", "/cart", "/signup", "/signin"];

        [logoIcon, cartIcon, signupButton, signinButton].forEach((element, i) =>
            expect(element?.closest("a")).toHaveAttribute("href", path[i])
        );
    });
});
