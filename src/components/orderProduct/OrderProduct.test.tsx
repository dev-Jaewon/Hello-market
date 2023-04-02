import { renderWithProviders } from "../../utils/test-utils";
import { OrderProduct } from "./OrderProduct";
import { getTrueCheckedProduct } from "../../__mocks__/data/cart";
import { fireEvent } from "@testing-library/react";

describe("<OrderProduct />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<OrderProduct />, {
            preloadedState: {
                cartState: getTrueCheckedProduct,
            },
        });

        const sectionName = ins.getByText("주문상품");
        const foldIcon = ins.queryByLabelText("리스트 접는 아이콘");
        const openIcon = ins.queryByLabelText("리스트 펼치는 아이콘");
        const list = ins.getByRole("list");

        return { sectionName, foldIcon, openIcon, list };
    };

    test("렌더링", () => {
        const { sectionName, foldIcon, openIcon } = renderComponent();

        expect(sectionName).toBeInTheDocument();
        expect(foldIcon).not.toBeInTheDocument();
        expect(openIcon).toBeInTheDocument();
    });

    test("open 상태 상품 렌더링", () => {
        const { list, openIcon } = renderComponent();

        // 리스트를 펼치기 위해 클릭
        fireEvent.click(openIcon as HTMLElement);

        expect(list.querySelector("img")).toBeInTheDocument();
        expect(list.querySelector(".name")).toBeInTheDocument();
        expect(list.querySelector(".quantity")).toBeInTheDocument();
        expect(list.querySelector(".price")).toBeInTheDocument();
    });

    test("주문상품 리스트 렌더링", () => {
        const { list, openIcon } = renderComponent();

        const checkedLength = getTrueCheckedProduct.list.filter(
            (item) => item.checked
        );

        // 리스트를 펼치기 위해 클릭
        fireEvent.click(openIcon as HTMLElement);
        expect(list.childElementCount).toBe(checkedLength.length);
    });
});
