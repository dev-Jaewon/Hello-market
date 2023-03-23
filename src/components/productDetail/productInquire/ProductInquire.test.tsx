import { render } from "@testing-library/react";
import { ProductInquire, ProductInquirePropsType } from "./ProductInquire";

describe("<ProductInquire />", () => {
    const renderComponent = (props: ProductInquirePropsType) => {
        const obj = render(<ProductInquire {...props} />);

        const title = obj.getByText("상품문의");
        const questionBtn = obj.getByText("문의하기");

        return {
            title,
            questionBtn,
        };
    };

    test("", () => {});
});
