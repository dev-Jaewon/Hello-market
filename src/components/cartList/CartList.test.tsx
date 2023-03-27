import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { CartList } from "./CartList";
import { cartMock } from "../../__mocks__/data/cart";
import { renderWithProviders } from "../../utils/test-utils";

describe("<CartList />", () => {
    const renderComponent = () => {
        const ins = renderWithProviders(<CartList />, {
            preloadedState: {
                cartState: {
                    list: [cartMock()],
                },
            },
        });

        const store = ins.store;
        const closeBtn = ins.getByLabelText("삭제 버튼");
        const productImage = ins.getByRole("img");
        const checkAllButton = ins.getByLabelText("전체 선택 체크박스");

        return { store, closeBtn, productImage, checkAllButton };
    };

    test("삭제 버튼 클릭시 리스트에서 삭제", async () => {
        const { closeBtn, store } = renderComponent();

        expect(store.getState().cartState.list).toHaveLength(1);

        await act(() => {
            fireEvent.click(closeBtn);
        });

        expect(store.getState().cartState.list).toHaveLength(0);
    });

    test("제품 이름 클릭시 라우터 이동", () => {
        const { productImage } = renderComponent();

        fireEvent.click(productImage);
    });

    test("전체선택 체크 박스 클릭", () => {
        const { store, checkAllButton } = renderComponent();

        const beforeState = store
            .getState()
            .cartState.list.every((item) => item.checked);

        fireEvent.click(checkAllButton);

        const afterState = store
            .getState()
            .cartState.list.every((item) => item.checked);

        expect(beforeState).not.toEqual(afterState);
    });
});
