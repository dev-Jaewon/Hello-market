import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("<Footer />", () => {
    const renderComponent = () => {
        const obj = render(<Footer />);

        return { obj };
    };

    test("렌더링 ", () => {
        const { obj } = renderComponent();

        expect(obj.container).toBeInTheDocument();
    });
});
