import { renderWithProviders } from "../../../utils/test-utils";
import { ProductReview } from "./ProductReview";

describe("<ProductComent />", () => {
    const renderComponent = () => {
        const obj = renderWithProviders(<ProductReview />);

        const head = obj.getByText("상품후기");

        return { head };
    };

    test("렌더링", () => {
        const { head } = renderComponent();

        expect(head).toBeInTheDocument();
    });
});
