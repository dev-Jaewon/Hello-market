import { fireEvent, render } from "@testing-library/react";
import {
    ProductDetailHeader,
    ProductDetailHeaderType,
} from "./productDetailHeader";

describe("<ProductDetailHeader>", () => {
    const scrollEvent = jest.fn();

    const refEle = {
        current: document.createElement("div"),
    };

    beforeEach(() => {
        window.HTMLDivElement.prototype.scrollIntoView = scrollEvent;
        scrollEvent.mockClear();
    });

    const component = (props: ProductDetailHeaderType) => {
        const instance = render(<ProductDetailHeader {...props} />);

        const infoTab = instance.getByText("상세정보");
        const comentTab = instance.getByText(/후기/);
        const inquiryTab = instance.getByText("문의");
        const descriptionTab = instance.getByText("상품설명");

        return { infoTab, comentTab, inquiryTab, descriptionTab };
    };

    test("렌더링", () => {
        const { infoTab, descriptionTab, comentTab, inquiryTab } = component({
            reviewCount: 10,
            defaultTap: "description",
            inquiryRef: refEle,
            infoRefRef: refEle,
            reviewRef: refEle,
            descriptionRef: refEle,
        });

        expect(infoTab).toBeInTheDocument();
        expect(comentTab).toBeInTheDocument();
        expect(inquiryTab).toBeInTheDocument();
        expect(descriptionTab).toBeInTheDocument();
    });

    test("메뉴 클릭시 스크롤", () => {
        const { infoTab, descriptionTab, comentTab, inquiryTab } = component({
            reviewCount: 10,
            defaultTap: "description",
            inquiryRef: refEle,
            infoRefRef: refEle,
            reviewRef: refEle,
            descriptionRef: refEle,
        });

        [infoTab, descriptionTab, comentTab, inquiryTab].forEach((tab) =>
            fireEvent.click(tab)
        );

        expect(scrollEvent).toBeCalledTimes(4);
    });
});
